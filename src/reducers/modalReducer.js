export default (
  state = {
    status: false
  },
  action
) => {
  switch (action.type) {
    case "SWITCH_MODAL_ON":
      return {
        ...state,
        status: action.payload
      };
    case "SWITCH_MODAL_OFF":
      return {
        ...state,
        status: action.payload
      };
    default:
      return state;
  }
};
