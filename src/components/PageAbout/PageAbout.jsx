import './PageAbout.scss';
import React from 'react';

export default class PageAbout extends React.PureComponent {
  render() {
    const { content: aboutText } = this.props;

    return aboutText.map(p => <React.Fragment><p className="aboutText">{p}</p></React.Fragment>);
  }
}
