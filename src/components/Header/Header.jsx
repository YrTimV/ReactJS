import './Header.scss';
import React from 'react';

import Title from '../Title';
import NavBar from '../NavBar';

export default class Header extends React.PureComponent {
  render() {
    const { caption, navBarItems, navPage, onLinkClick } = this.props;

    return (
      <header className="header">
        <Title caption={caption} />
        <NavBar items={navBarItems} currentPage={navPage} onLinkClick={onLinkClick} />
      </header>
    );
  }
}
