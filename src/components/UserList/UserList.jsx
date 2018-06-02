import './UserList.scss';
import React from 'react';
import PropTypes from 'prop-types';
import User from 'components/User';

export default class UserList extends React.PureComponent {
  static propTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
      })
    ),
  }

  render() {
    const { users } = this.props;

    return (
      <div className="userList">
        {users.map((user) => <User key={user.id} user={user} />)}
      </div>
    );
  }
}
