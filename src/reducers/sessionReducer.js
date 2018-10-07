export default (
  state = {
    loggedin: false,
    fire_currentUser: "",
    db_currentUser: ""
  },
  action
) => {
  switch (action.type) {
    case "SESSION_EXISTS": {
      return {
        ...state,
        loggedin: true,
        db_currentUser: action.payload.dbUser,
        fire_currentUser: action.payload.firebaseUser
      };
    }
    case "SESSION_NULL": {
      return {
        ...state,
        loggedin: false,
        db_currentUser: "",
        fire_currentUser: ""
      };
    }
    default:
      return state;
  }
};
