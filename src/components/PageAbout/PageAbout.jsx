import './PageAbout.scss';
import React from 'react';

export default class PageAbout extends React.PureComponent {
  render() {
    const { content: aboutText } = this.props;

    return aboutText.map((p, idx) => <p key={idx} className="aboutText">{p}</p>);
  }
}
