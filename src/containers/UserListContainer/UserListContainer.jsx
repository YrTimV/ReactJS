import './UserListContainer.scss';
import React from 'react';

import UserList from 'components/UserList';
import Loading from 'components/Loading';

export default class UserListContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: true,
    };
  }

  render() {
    const { users, loading } = this.state;

    return (
      <React.Fragment>
        {loading ? <Loading /> : <UserList users={users} />}
      </React.Fragment>
    );
  }

  componentDidMount() {
    fetch('https:/jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
        this.setState({
          users,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({
          users: [],
          loading: false,
          error,
        });
      });
  }
}
