// Main import section.
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// Components import section.

// Component global data.

// Component class.
export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {modal: false};
    this.toggle = this.toggle.bind(this);
    this.className = 'login';
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div className={this.className}>
        <Button color="danger" onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <form method="POST">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username"/>
              <br/><br/>
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password"/>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
