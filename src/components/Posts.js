import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPosts } from "../actions/index";
import { ListGroup, ListGroupItem, Button, Col, Row } from "reactstrap";
import styles from "./Style.module.css";
import { Link } from "react-router-dom";

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
            <ListGroupItem
              key={post}
              color="success"
              className={styles.ListGroupItem}
            >
              {this.props.posts[post].title}
            </ListGroupItem>
          </Link>
        );
      });
    }
  }

  render() {
    return (
      <div className={styles.Wrapper}>
        <Row>
          <Col style={{ textAlign: "center" }} xs="8">
            <h1> POSTS </h1>
            <ListGroup className={styles.ListGroup}>
              {this.renderPost()}
            </ListGroup>
          </Col>
          <Col xs="4" className={styles.ListGroupButton}>
            <Button color="primary">
              <Link to="/posts/newpost"> New Post</Link>
            </Button>
          </Col>
        </Row>
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
