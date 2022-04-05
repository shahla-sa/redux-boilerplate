import axios from "axios";
import { GET_USER } from "../actionType";

export const getUsers = () => async (dispatch) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log("users", data);
  dispatch({ type: GET_USER, payload: data });
};
