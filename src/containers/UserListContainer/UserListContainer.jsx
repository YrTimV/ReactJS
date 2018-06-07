import './UserListContainer.scss';
import React from 'react';
import { connect } from 'react-redux';

import { loadUsers } from 'actions/users';
import UserList from 'components/UserList';
import Loading from 'components/Loading';

class UserListContainer extends React.PureComponent {
  render() {
    const { users, loading } = this.props;

    return (
      <React.Fragment>
        {loading ? <Loading /> : <UserList users={users} />}
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { load } = this.props;

    load();
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    users: state.users.users,
    loading: state.users.loading,
    loadError: state.users.loadError,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => loadUsers(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListContainer);
