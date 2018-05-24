// Main import section.
import './NavBar.css';
import React from 'react';

// Components import section.
import Login from '../Login';

// Component global data.
const navBarClasses = 'navBar';
const listClasses = 'list';
const itemClasses = 'item';

// Component class.
export default class NavBar extends React.Component {
  render() {
    const navMenuItems = this.props.items.map(item =>
        <li className={itemClasses} key={item.id}><a href={item.link}>{item.title}</a></li>);

    return (
      <nav className={navBarClasses}>
        <ul className={listClasses}>
          {navMenuItems}
        </ul>
        <Login></Login>
      </nav>
    );
  }
}
