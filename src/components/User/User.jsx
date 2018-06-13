import './User.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.PureComponent {
  static propTypes = {
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
  }).isRequired,
  }
  
  render() {
    const { user: { username, email, firstName, lastName, age } } = this.props;

    return (
      <div className="user">
        <br />
        Full Name: {firstName} {lastName}
        <br />
        Username: {username}
        <br />
        Email: {email}
        <br />
        Age: {age}
      </div>
    );
  }
}
