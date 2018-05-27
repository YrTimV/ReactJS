import './CommentForm.scss';
import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CommentForm extends React.PureComponent {
  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Leave a Comment:</CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input type="text" name="username" id="username"/>
            </FormGroup>
            <FormGroup>
              <Label for="comment">Comment:</Label>
              <Input type="textarea" name="comment" id="comment" />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
