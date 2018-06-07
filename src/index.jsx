import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './assets/store';

import UserListContainer from 'containers/UserListContainer';
import User from 'components/User';
import PostListContainer from 'containers/PostListContainer';

const routes = [
  {
    path: '/posts',
    component: PostListContainer,
    exact: true,
  },
  {
    path: '/posts/:userId',
    component: PostListContainer,
    exact: true,
  },
  {
    path: '/users',
    component: UserListContainer,
    exact: true,
  },
  {
    path: '/users/:userId',
    component: User,
    exact: true,
  },
];

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            {routes.map((route, idx) => <Route key={idx} {...route} />)}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
