import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FormGroup, Form, Input, Label, Col } from "reactstrap";
class NewPost extends Component {
  renderField(field) {
    return (
      <FormGroup>
        <Label>{field.lable}</Label>
        <Col sm={10}>
          <Input type="text" {...field.input} />
        </Col>
        {field.meta.touched ? field.meta.error : ""}
      </FormGroup>
    );
  }

  onSubmit(values) {
    console.log(values);
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
          <button type="submit"> Submit </button>
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

export default reduxForm({ form: "postNewForm", validate })(NewPost);
