import './NavBar.scss';
import React from 'react';

import Login from '../Login';

export default class NavBar extends React.PureComponent {
  render() {
    const navMenuItems = this.props.items.map(item =>
        <li className="item" key={item.id}><a href={item.link}>{item.title}</a></li>);

    return (
      <nav className="navBar">
        <ul className="list">
          {navMenuItems}
        </ul>
        <Login></Login>
      </nav>
    );
  }
}
