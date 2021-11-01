const Reducer = (state, action) => {
  switch (action.type) {
    case "ViewList":
      return {
        ...state,
        ListData: action.payload,
      };
    case "EditList": {
      return {
        ...state,
        UpdatedlistData: action.payload,
      };
    }
    case "DeleteListItem":
      return {
        ...state,
        id: action.payload,
      };
    case "AddTask":
      return {
        ...state,
        task: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
