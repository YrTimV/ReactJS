import './Layout.scss';
import React from 'react';

import Header from '../Header';
import Aside from '../Aside';
import Content from '../Content';
import Footer from '../Footer';
import posts from '../../posts.js'

export default class Layout extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: {
        pageHeader: 'Blog posts',
        descText: 'List of all posts',
        posts,
      }
    };
  }

  handleLinkClick = (link => event => {
    const post = posts.find(post => post.link === link);

    event.preventDefault();
    
    this.setState({
      currentPage: {
        pageHeader: post.title,
        descText: `Posted on ${post.published.toLocaleDateString()} by ${post.author}`,
        post
      }
    });
  });

  render() {
    return (
      <div className="layout">
        <Header/>
        <div className="main">
          <Aside posts={posts.map(post => ({title: post.title, link: post.link}))} onLinkClick={this.handleLinkClick}/>
          <Content pageContent={this.state.currentPage} onLinkClick={this.handleLinkClick}/>
        </div>
        <Footer/>
      </div>
    );
  }
}
