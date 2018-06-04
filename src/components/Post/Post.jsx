import './Post.scss';
import React from 'react';
import { Button } from 'reactstrap';

export default class PostContainer extends React.PureComponent {
  render() {
    const { content: { logo, link, title, description, published, author }, onPostLinkClick } = this.props;

    return (
      <section className="post">
        <img src={`http://placehold.it/${logo}`} alt={`Post logo ${logo}`}/>
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <Button color="primary" onClick={onPostLinkClick(link)}>Read More →</Button>
        <p className="postFooter">Posted on <span className="published">{published.toLocaleDateString()}</span> by <span className="author">{author}</span></p>
      </section>
    );
  }
}
