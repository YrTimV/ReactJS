import './UserListContainer.scss';
import React from 'react';

export default class UserListContainer extends React.PureComponent {
  render() {
    return this.props.content.map(user => (
      <React.Fragment>
        Id: {user.id}
        <br/><br/>
        Name: {user.name}
        <br/><br/>
        Username: {user.username}
        <br/><br/>
        Email: {user.email}
      </React.Fragment>
    ));
  }
}
