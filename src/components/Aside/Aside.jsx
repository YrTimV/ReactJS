import './Aside.scss';
import React from 'react';

export default class Aside extends React.PureComponent {
  render() {
    return (
      <aside className="aside">
        <section>
          <h3>Posts</h3>
          <ul className="posts">
            {this.props.posts.map(post => <li key={post.link}><a href={`/${post.link}`} onClick={this.props.onLinkClick(post.link)}>{post.title}</a></li>)}
          </ul>
        </section>
      </aside>
    );
  }
}
