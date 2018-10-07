export default (
  state = {
    signinginGoogle: false,
    signinginFacebook: false,
    fire_accountDetails: "",
    db_accountDetails: "",
    error: ""
  },
  action
) => {
  switch (action.type) {
    case "GOOGLE_CREATE_ACCOUNT": {
      return {
        ...state,
        signinginGoogle: true
      };
    }
    case "GOOGLE_CREATE_ACCOUNT_SUCCESS": {
      return {
        ...state,
        signinginGoogle: false,
        fire_accountDetails: action.payload.firebaseUser,
        db_accountDetails: action.payload.dbUser
      };
    }
    case "GOOGLE_CREATE_ACCOUNT_ERROR": {
      return {
        ...state,
        signinginGoogle: false,
        error: action.payload
      };
    }
    case "FACEBOOK_CREATE_ACCOUNT": {
      return {
        ...state,
        signinginFacebook: true
      };
    }
    case "FACEBOOK_CREATE_ACCOUNT_SUCCESS": {
      return {
        ...state,
        signinginFacebook: false,
        fire_accountDetails: action.payload.firebaseUser,
        db_accountDetails: action.payload.dbUser
      };
    }
    case "FACEBOOK_CREATE_ACCOUNT_ERROR": {
      return {
        ...state,
        signinginFacebook: false,
        error: action.payload
      };
    }

    default: {
      return state;
    }
  }
};
