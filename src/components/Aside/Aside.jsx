import './Aside.scss';
import React from 'react';

export default class Aside extends React.PureComponent {
  render() {
    const { posts, onLinkClick, navPage } = this.props;

    return (
      <aside className="aside">
        <h3>Posts</h3>
        <ul className="posts">
          {posts.map(post => <li key={post.link}><a className={post.link === navPage ? 'itemActive' : ''} href={`/posts/${post.link}`} onClick={onLinkClick(post.link)}>{post.title}</a></li>)}
        </ul>
      </aside>
    );
  }
}
