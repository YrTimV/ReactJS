import './NavBar.scss';
import React from 'react';

import Login from '../Login';

export default class NavBar extends React.PureComponent {
  render() {
    const { items, onLinkClick, currentPage } = this.props;

    return (
      <nav className="navBar">
        <ul className="list">
          {items.map(item => <li className="item" key={item.id}><a className={item.id === currentPage ? 'itemActive' : ''} href={item.link} onClick={onLinkClick(item.id)}>{item.title}</a></li>)}
        </ul>
        <Login />
      </nav>
    );
  }
}
