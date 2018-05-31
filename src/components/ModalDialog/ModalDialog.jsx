import './ModalDialog.scss';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalDialog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {modal: true};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
        <ModalBody>
          <p>Welcome to the post page.</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    );
  }
}
