import axios from "axios";

export const FETCH_POST = "FETCH_POST";

const baseUrl = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=1246812468";

export function fetchPosts() {
  const request = axios.get(`${baseUrl}/posts${API_KEY}`);
  console.log(request, "request");
  return {
    type: FETCH_POST,
    payload: request
  };
}
