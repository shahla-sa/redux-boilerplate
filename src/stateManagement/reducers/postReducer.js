import { GET_POSTS, DELETE_POST, SET_LOADING } from "../actionType";

const initialState = {
  posts: [],
  loading: false,
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};

export default postReducer;
