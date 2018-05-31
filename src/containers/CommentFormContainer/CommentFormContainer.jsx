import './CommentFormContainer.scss';
import React from 'react';
import { Button, Card, CardHeader, CardTitle, CardBody, Form, FormGroup, Label, Input } from 'reactstrap';

export default class CommentForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      text: '',
    };
  }

  handlePropertyChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  }

  handleSubmit = event => {
    this.props.onPostCommentSubmit(this.props.link, this.state);

    this.setState({
      username: '',
      text: '',
    });

    event.preventDefault();
  }

  render() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Leave a Comment:</CardTitle>
        </CardHeader>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="username">Username:</Label>
              <Input type="text" id="username" value={this.state.username} onChange={this.handlePropertyChange('username')} />
            </FormGroup>
            <FormGroup>
              <Label for="text">Comment:</Label>
              <Input type="textarea" id="text" value={this.state.text} onChange={this.handlePropertyChange('text')} />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}
