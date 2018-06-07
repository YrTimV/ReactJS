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
    const { user: { id, name, username, email } } = this.props;

    return (
      <div className="user">
        Id: <span className="userId">{id}</span>
        <br />
        Name: {name}
        <br />
        Username: {username}
        <br />
        Email: {email}
      </div>
    );
  }
}
