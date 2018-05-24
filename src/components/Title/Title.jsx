// Main import section.
import './Title.css';
import React from 'react';

// Components import section.

// Component global data.
const titleClasses = 'title';

// Component class.
export default class Title extends React.Component {
  render() {
    const { caption: headerCaption } = this.props;

    return (
      <h1 className={titleClasses}>{headerCaption}</h1>
    );
  }
}
