import './Content.scss';
import React from 'react';

import Post from '../Post';
import ModalDialog from '../ModalDialog';

export default class Content extends React.PureComponent {
  renderSinglePost() {
    const { pageHeader: title, descText: text, post } = this.props.pageContent;

    return (
      <main className="content">
        <ModalDialog title={title} text = {`Welcome to the post &laquo;${text}&raquo;`}/>
        <Post content={{...post, singlePost: true}}/>
      </main>
    );
  }

  render() {
    if (this.props.pageContent.post) {
      return this.renderSinglePost();
    }

    const { pageHeader, descText, posts } = this.props.pageContent;
    const pageContent = posts.map(post => (<Post key={post.link} content={post} onLinkClick={this.props.onLinkClick}/>));
    
    return (
      <main className="content">
        <h1>{pageHeader} <small>{descText}</small></h1>
        {pageContent}
      </main>
    );
  }
}
