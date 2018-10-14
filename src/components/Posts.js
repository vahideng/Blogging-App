import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import styles from "./Style.module.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";

class Posts extends Component {
  componentDidMount() {
    this.props.onFetchData();
  }

  renderPost() {
    console.log(this.props.posts, "posts2");
    if (this.props.posts) {
      return Object.keys(this.props.posts).map(post => {
        return (
          <Link to={`/post/${post}`}>
            <li key={post} color="success" className={styles.ListGroupItem}>
              {this.props.posts[post].title}
            </li>
          </Link>
        );
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div className={styles.Wrapper}>
          <h1> POSTS </h1>
          <div className={styles.ContentWrapper}>
            <ul className={styles.ListGroup}>{this.renderPost()}</ul>
            <Link className={styles.AddButton} to="/posts/newpost">
              New Post
            </Link>
          </div>
        </div>
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
