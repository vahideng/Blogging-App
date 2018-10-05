import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import ReduxPromise from "redux-promise";
import rootReducer from "../src/reducers/index";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import Post from "./components/Post";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(ReduxPromise))
);

const routes = (
  <div>
    <Switch>
      <Route path="/post/:id" component={Post} />
      <Route path="/posts/newPost" component={NewPost} />
      <Route path="/" component={Posts} />
    </Switch>
  </div>
);

const app = (
  <Provider store={store}>
    <BrowserRouter>{routes}</BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
serviceWorker.unregister();
