import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return <Link to="/posts/newpost"> New Post</Link>;
  }
}

export default Navigation;
