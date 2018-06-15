import './UserList.scss';
import React from 'react';
import PropTypes from 'prop-types';
import User from 'components/User';

export default class UserList extends React.PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
      })
    ),
  }

  render() {
    const { users } = this.props;

    return (
      <div className="userList">
        {users.map((user) => <User key={user.username} user={user} />)}
      </div>
    );
  }
}
