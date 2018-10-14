import React, { Component } from "react";
import { Row, Col, Button, Jumbotron } from "reactstrap";
import { bindActionCreators } from "redux";
import { fetchPost, deletePost } from "../actions/index";
import { connect } from "react-redux";
class Post extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const { id } = this.props.match.params;
      this.props.onFetchPost(id);
    }
  }
  deletHandler() {
    const { id } = this.props.match.params;
    this.props.onDeletePost(id, () => {
      this.props.history.push("/");
    });
  }

  render() {
    if (!this.props.post) {
      return <div> ...Loading </div>;
    }
    return (
      <div>
        <Jumbotron>
          <Row className="lead">
            <Col xs="8">
              <h1>Title : {this.props.post.title}</h1>
            </Col>
            <Col xs="4">
              <Button onClick={this.deletHandler.bind(this)}>Delete</Button>
            </Col>
          </Row>
          <Row className="my-2">
            <Col xs="6" className="lead">
              Content :{this.props.post.content}
            </Col>
            <Col xs="6">
              Categories:
              {this.props.post.categories}
            </Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.posts[ownProps.match.params.id]
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { onFetchPost: fetchPost, onDeletePost: deletePost },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
