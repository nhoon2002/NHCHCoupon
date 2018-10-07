import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionsCreators from "./actions/userActions.js";

import Main from "./containers/Main.jsx";

const mapStateToProps = state => ({
  allData: state,
  loginStatus: state.sessionReducer.loggedin,
  fire_currentUser: state.sessionReducer.fire_currentUser,
  db_currentUser: state.sessionReducer.db_currentUser,
  fire_currentLogin: state.loginReducer.fire_accountDetails,
  db_currentLogin: state.loginReducer.db_accountDetails,
  loginAccount: state.loginReducer.signinginAccount,
  sample: state.sampleReducer.result,
  fetchedData: state.sampleReducer.fetch,
  axiosData: state.sampleReducer.axios,
  categories: state.categoryReducer.data,
  modalStatus: state.modalReducer.status,
  //Notification
  notificationStatus: state.notificationReducer.show,
  notificationMsg: state.notificationReducer.msg,
  notificationType: state.notificationReducer.type
  // ...state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionsCreators, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
