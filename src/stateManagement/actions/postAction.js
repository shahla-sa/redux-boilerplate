import axios from "axios";
import { GET_POSTS, DELETE_POST, SET_LOADING } from "../actionType";

export const getPosts = () => async (dispatch, getState) => {
  dispatch({ type: SET_LOADING });
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: GET_POSTS, payload: data });
};
export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};
