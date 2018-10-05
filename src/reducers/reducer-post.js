import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../actions/index";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // let objectResult = {};
      // for (let item of action.payload.data) {
      //   let newObject = Object.assign({}, item);
      //   objectResult[newObject.id] = newObject;
      // }
      // return { ...objectResult, ...state };
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      console.log(action.payload.data.id);
      return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}
