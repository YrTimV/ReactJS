import './Title.scss';
import React from 'react';

export default class Title extends React.PureComponent {
  render() {
    const { caption: headerCaption } = this.props;

    return (
      <h1 className="title">{headerCaption}</h1>
    );
  }
}
