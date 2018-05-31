import React from 'react';
import ReactDOM from 'react-dom';

import LayoutContainer from './containers/LayoutContainer';

import appData from './appData.js';
import UserService from './services/UserService';

appData.users = UserService.getUserList('https:/jsonplaceholder.typicode.com/users');

ReactDOM.render(<LayoutContainer data={appData}/>, document.getElementById('root'));
