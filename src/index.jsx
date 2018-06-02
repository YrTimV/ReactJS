import React from 'react';
import ReactDOM from 'react-dom';

import LayoutContainer from './containers/LayoutContainer';

import appData from './assets/appData.js';

ReactDOM.render(<LayoutContainer data={appData}/>, document.getElementById('root'));
