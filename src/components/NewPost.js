import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FormGroup, Form, Input, Label, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { newPost } from "../actions/index";
import { bindActionCreators } from "redux";

class NewPost extends Component {
  renderField(field) {
    //===  Styling input ===
    const {
      meta: { touched, error } // ES6 Refactor to simplify the code
    } = field;

    let input = <Input type="text" {...field.input} />;
    if (touched && error) {
      input = <Input invalid type="text" {...field.input} />;
    } else if (!touched) {
      input = <Input type="text" {...field.input} />;
    } else {
      input = <Input valid type="text" {...field.input} />;
    }
    //=== styling done ===

    return (
      <FormGroup>
        <Label>{field.lable}</Label>
        <Col sm={10}>{input}</Col>
        <div style={{ color: "red" }}>
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </FormGroup>
    );
  }

  onSubmit(values) {
    this.props.onNewPost(values, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" lable="Title" component={this.renderField} />
          <Field
            name="categories"
            lable="Categories"
            component={this.renderField}
          />
          <Field name="content" lable="Content" component={this.renderField} />
          <Button
            style={{ margin: "20px" }}
            type="submit"
            color="primary"
            size="lg"
          >
            Submit
          </Button>
          <Button
            style={{ margin: "20px" }}
            type="submit"
            color="danger"
            size="lg"
          >
            <Link to="/"> Home </Link>
          </Button>
        </Form>
      </div>
    );
  }
}

function validate(values) {
  //validate the form
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter a categories";
  }
  if (!values.content) {
    errors.content = "Enter a content";
  }
  return errors;
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ onNewPost: newPost }, dispatch);
};

export default reduxForm({ form: "postNewForm", validate })(
  connect(
    null,
    mapDispatchToProps
  )(NewPost)
);
