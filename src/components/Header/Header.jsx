// Main import section.
import './Header.css';
import React from 'react';

// Components import section.
import Title from '../Title';
import NavBar from '../NavBar';

// Component global data.
const navBarMenuItems = [
  { id: 'main', link: '/', title: 'Main' },
  { id: 'about', link: '/about', title: 'About' },
  { id: 'contacts', link: '/contacts', title: 'Contacts' }
];
const headerCaption = 'Welcome to my ReactBloG';
const headerClasses = 'header';

// Component class.
export default class Header extends React.Component {
  render() {

    return (
      <header className={headerClasses}>
        <Title caption={headerCaption}></Title>
        <NavBar items={navBarMenuItems}></NavBar>
      </header>
    );
  }
}
