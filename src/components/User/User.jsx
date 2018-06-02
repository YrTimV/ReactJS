import './User.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }
  
  render() {
    const { user } = this.props;

    return (
      <div className="user">
        Id: <span className="userId">{user.id}</span>
        <br/>
        Name: {user.name}
        <br/>
        Username: {user.username}
        <br/>
        Email: {user.email}
      </div>
    );
  }
}
