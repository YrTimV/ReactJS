import './PagePost.scss';
import React from 'react';
import { Button } from 'reactstrap';

import CommentFormContainer from '../../containers/CommentFormContainer';
import Comment from '../Comment';

export default class PagePost extends React.PureComponent {
  render() {
    const { content: { logo, link, title, description, published, author, comments }, handlers } = this.props;

    return (
      <section className="post">
        <h2>{title}</h2>
        <br/>
        <h5>By <span className="author">{author}</span></h5>
        <hr/>
        <p>Posted on {published.toLocaleDateString()} at {published.toLocaleTimeString()}</p>
        <hr/>
        <img src={`http://placehold.it/${logo}`} alt={`Post logo ${logo}`}/>
        <p className="description">{description}</p>
        <hr/>
        <CommentFormContainer link={link} onPostCommentSubmit={handlers.onPostCommentSubmit} />
        {comments.map((comment, idx) => <Comment key={idx} data={comment} />)}
      </section>
    );
  }
}
