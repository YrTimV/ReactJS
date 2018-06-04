import './PageBlog.scss';
import React from 'react';

import Post from '../Post';

export default class PageBlog extends React.PureComponent {
  render() {
    const { content: posts, handlers } = this.props;

    return posts.map(post => <Post key={post.link} content={post} onPostLinkClick={handlers.onPostLinkClick} />);
  }
}
