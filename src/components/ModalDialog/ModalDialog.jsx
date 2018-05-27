import './ModalDialog.scss';
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class ModalDialog extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {modal: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { title, text } = this.props;

    return (
      <div className="modalDialog">
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
            <ModalBody>
              <p>Welcome to the page &laquo;{text}&raquo;</p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>OK</Button>
            </ModalFooter>
          </Modal>
      </div>
    );
  }
}
