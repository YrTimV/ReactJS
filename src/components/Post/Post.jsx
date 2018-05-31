import './Post.scss';
import React from 'react';
import { Button } from 'reactstrap';

import CommentForm from '../CommentForm';

export default class Post extends React.PureComponent {
  render() {
    const { logo, title, link, description, published, author, singlePost } = this.props.content;

    if (!this.props.content.singlePost) {
      return (
        <section className="post">
          <img src={`http://placehold.it/${logo}`} alt={`Post logo ${logo}`}/>
          <h2>{title}</h2>
          <p className="description">{description}</p>
          <Button color="primary" onClick={this.props.onLinkClick(link)}>Read More →</Button>
          <p className="postFooter">Posted on <span className="published">{published.toLocaleDateString()}</span> by <span className="author">{author}</span></p>
        </section>
      );
    }

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
        <CommentForm/>
      </section>
    );
  }
}
