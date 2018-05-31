import './Comment.scss';
import React from 'react';

export default class Comment extends React.PureComponent {
  render() {
    const { data: { published, author, text } } = this.props;

    return (
      <section className="comment">
        <img className="avatar" src="http://placehold.it/50x50" alt="avatar"/>
        <div className="inside">
          <h5 className="author">{author} on {published.toLocaleDateString()} {published.toLocaleTimeString()}</h5>
          {text}
        </div>
      </section>
    );
  }
}
