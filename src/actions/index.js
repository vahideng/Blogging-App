import axios from "axios";

export const FETCH_POSTS = "FETCH_POSTS";
export const NEW_POST = "NEW_POST";
export const FETCH_POST = "FETCH_POST";
export const DELETE_POST = "DELETE_POST";

const baseUrl = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=1246812468";

export function fetchPosts() {
  const request = axios.get(`${baseUrl}/posts${API_KEY}`);
  console.log(request, "request");
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function newPost(values, callBack) {
  const post = axios
    .post(`${baseUrl}/posts${API_KEY}`, values)
    .then(() => callBack());

  return {
    type: NEW_POST,
    newPostPayload: post
  };
}

export function fetchPost(id) {
  const fetchPost = axios.get(`${baseUrl}/posts/${id}${API_KEY}`);
  console.log(fetchPost, "fetvchPost looking for id");
  return {
    type: FETCH_POST,
    payload: fetchPost
  };
}

export function deletePost(id, callBack) {
  axios.delete(`${baseUrl}/posts/${id}${API_KEY}`).then(() => callBack());

  return {
    type: DELETE_POST,
    payload: id
  };
}
