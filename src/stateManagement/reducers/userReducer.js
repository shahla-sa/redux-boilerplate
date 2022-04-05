import { GET_USER } from "../actionType";

const initialState = {
  users: [],
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default postReducer;
