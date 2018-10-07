import axios from "axios";
import { DEFAULT_API_URL } from "../constants";
import { browserHistory } from "react-router";
import firebase from "firebase/app";
import "firebase/auth";

export const sampleAction = () => dispatch => {
  dispatch({
    type: "SAMPLE_ACTION",
    payload: "result yielded."
  });
};
export const sampleFetch = () => async dispatch => {
  await fetch(DEFAULT_API_URL + "test", {
    method: "POST",
    headers: {
      Accept: "application/json"
      // "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: "test"
    })
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "SAMPLE_FETCH",
        payload: json
      });
    })
    .catch(error => {
      console.log(error);
      console.log("error");
    });
};
export const sampleAxios = () => dispatch => {
  axios.get("https://jsonplaceholder.typicode.com/todos").then(response => {
    dispatch({
      type: "SAMPLE_AXIOS",
      payload: response.data
    });
  });
};
export const getTest = () => async dispatch => {
  console.log("running test");
  await fetch(DEFAULT_API_URL + "categories", {
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      dispatch({
        type: "FETCH_CATEGORIES_COMPLETED",
        payload: json.categories
      });
    })
    .catch(error => {
      JSON.stringify(error);
      console.log(error);
      console.log("error");
    });
};
// export const getCategories = () => async dispatch => {
//   await fetch(DEFAULT_API_URL + "get-categories", {
//     method: "GET",
//     headers: {
//       Accept: "application/json"
//     }
//   })
//     .then(response => response.json())
//     .then(json => {
//       console.log(json);
//       dispatch({
//         type: "FETCH_CATEGORIES_COMPLETED",
//         payload: json.categories
//       });
//     })
//     .catch(error => {
//       console.log(error);
//       console.log("error");
//     });
// };
export const modalToggle = currentStatus => dispatch => {
  if (currentStatus) {
    dispatch({
      type: "SWITCH_MODAL_OFF",
      payload: false
    });
  } else {
    dispatch({
      type: "SWITCH_MODAL_ON",
      payload: true
    });
  }
};
export const notificationToggle = currentStatus => dispatch => {
  if (currentStatus.currentlyShowing) {
    dispatch({
      type: "SWITCH_NOTIFICATION_OFF",
      payload: { show: false, msg: "" }
    });
  } else {
    //If it wasnt showing already, toggle notification on, then set a timer to automatically disappear.
    dispatch({
      type: "SWITCH_NOTIFICATION_ON",
      payload: { show: true, msg: currentStatus.msg, type: currentStatus.type }
    });
    setTimeout(
      () =>
        dispatch({
          type: "SWITCH_NOTIFICATION_OFF",
          payload: { show: false, msg: "" }
        }),
      4000
    );
  }
};
export const checkSession = () => dispatch => {
  let firebaseUser = firebase.auth().currentUser;
  if (firebaseUser) {
    dispatch({
      type: "SESSION_EXISTS",
      payload: { firebaseUser: firebaseUser, dbuser: "" }
    });
    console.log("Auth status changed: logged in as: " + firebaseUser.email);
  } else {
    dispatch({ type: "SESSION_NULL", payload: "" });
    console.log("Auth status changed: not logged in.");
    browserHistory.push("/");
    dispatch(
      notificationToggle({
        currentlyShowing: false,
        msg: "You must login first!",
        type: "danger"
      })
    );
  }
};
export const signOut = () => dispatch => {
  firebase
    .auth()
    .signOut()
    .then(function(result) {
      dispatch({ type: "SESSION_NULL", payload: "" });
      dispatch({
        type: "SWITCH_MODAL_OFF",
        payload: false
      });
    }); //signs out current user
  // browserHistory.push("/");
};
export const sendUser = (params, user) => async dispatch => {
  await fetch(DEFAULT_API_URL + "signup-check", {
    method: "POST",
    headers: {
      Accept: "application/json"
      // "Content-Type": "application/json"
    },
    body: JSON.stringify(params)
  })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      if (params.user_origin === "google") {
        dispatch({
          type: "GOOGLE_CREATE_ACCOUNT_SUCCESS",
          payload: { firebaseUser: user, dbUser: json }
        });
      } else if (params.user_origin === "facebook") {
        dispatch({
          type: "FACEBOOK_CREATE_ACCOUNT_SUCCESS",
          payload: { firebaseUser: user, dbUser: json }
        });
      }
    })
    .catch(error => {
      console.log(error);
      if (params.user_origin === "google") {
        dispatch({
          type: "GOOGLE_CREATE_ACCOUNT_ERROR",
          payload: error
        });
      } else if (params.user_origin === "facebook") {
        dispatch({
          type: "FACEBOOK_CREATE_ACCOUNT_ERROR",
          payload: error
        });
      }
    });
};

export const SigninGoogle = () => dispatch => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      let data_obj = {
        user_id: user.providerData[0].uid,
        user_first: "",
        user_last: "",
        user_email: user.providerData[0].email,
        user_zipcode: "0",
        is_social: 1,
        user_origin: "google"
      };

      console.log(user);
      dispatch(sendUser(data_obj, user));
      dispatch({
        type: "SWITCH_MODAL_OFF",
        payload: false
      });
      //Register user to DB or return credentials
      // let user_info = sendUser_(data_obj);

      browserHistory.push("/");
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      let currentStatus = {
        currentlyShowing: false,
        type: "danger",
        msg: errorMessage
      };
      dispatch({
        type: "SWITCH_NOTIFICATION_ON",
        payload: {
          show: true,
          msg: currentStatus.msg,
          type: currentStatus.type
        }
      });
      setTimeout(
        () =>
          dispatch({
            type: "SWITCH_NOTIFICATION_OFF",
            payload: { show: false, msg: "" }
          }),
        4000
      );
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      dispatch({ type: "GOOGLE_CREATE_ACCOUNT_ERROR", payload: errorMessage });
    });
};

export const SigninFacebook = () => dispatch => {
  dispatch({ type: "FACEBOOK_CREATE_ACCOUNT", payload: "" });
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // let token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      let data_obj = {
        user_id: user.providerData[0].uid,
        user_first: "",
        user_last: "",
        user_email: user.providerData[0].email,
        user_zipcode: "0",
        is_social: 1,
        user_origin: "facebook"
      };
      dispatch({
        type: "SWITCH_MODAL_OFF",
        payload: false
      });
      dispatch(sendUser(data_obj, user));
      dispatch({ type: "FACEBOOK_CREATE_ACCOUNT_SUCESSS", payload: user });
      // browserHistory.push("/");
      // TODO: make a post request to the users DB if this is a new user.
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      let currentStatus = {
        currentlyShowing: false,
        type: "danger",
        msg: errorMessage
      };
      dispatch({
        type: "SWITCH_NOTIFICATION_ON",
        payload: {
          show: true,
          msg: currentStatus.msg,
          type: currentStatus.type
        }
      });
      setTimeout(
        () =>
          dispatch({
            type: "SWITCH_NOTIFICATION_OFF",
            payload: { show: false, msg: "" }
          }),
        4000
      );
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      dispatch({
        type: "FACEBOOK_CREATE_ACCOUNT_ERROR",
        payload: errorMessage
      });
    });
};
