// Main import section.
import './Footer.css';
import React from 'react';

// Components import section.

// Component global data.
const footerClasses = 'footer';

// Component class.
export default class Footer extends React.Component {
  render() {
    return (
      <footer className={footerClasses}>
        All rights reserved. &copy; 2018
      </footer>
    );
  }
}
