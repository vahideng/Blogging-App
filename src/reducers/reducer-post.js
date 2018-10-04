import { FETCH_POST } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      let objectResult = {};
      for (let item of action.payload.data) {
        let newObject = Object.assign({}, item);
        objectResult[newObject.id] = newObject;
      }
      console.log(objectResult, "payload");
      return { ...objectResult, ...state };

    default:
      return state;
  }
}
