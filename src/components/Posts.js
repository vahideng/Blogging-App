import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import { ListGroup, ListGroupItem } from "reactstrap";
import styles from "./Style.module.css";

class Posts extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  renderPost() {
    console.log(this.props.posts, "posts2");
    return Object.keys(this.props.posts).map(post => {
      return (
        <div>
          <ListGroupItem
            key={post.id}
            color="success"
            className={ListGroupItem}
          >
            {this.props.posts[post].title}
          </ListGroupItem>
          <ListGroupItem color="info" className="justify-content-between">
            {this.props.posts[post].categories}
          </ListGroupItem>
          <ListGroupItem color="warning" className="justify-content-between">
            {this.props.posts[post].content}
          </ListGroupItem>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1 className={styles.ListGroupItem}> POSTS </h1>
        <ListGroup className={styles.ListGroup}>{this.renderPost()}</ListGroup>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onFetchData: fetchPosts }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
