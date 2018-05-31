import './LayoutContainer.scss';
import React from 'react';

import Header from '../../components/Header';
import Aside from '../../components/Aside';
import Content from '../../components/Content';
import Footer from '../../components/Footer';

export default class LayoutContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentSection: 'blog',
      currentPage: {
        ...this.props.data.pageMeta['blog'],
        content: this.props.data.posts,
        handlers: {
          onPostLinkClick: this.handlePostLinkClick,
        },
      },
    };
  }

  handleNavLinkClick = (link => event => {
    const { data: { pageMeta, posts, aboutText, contacts } } = this.props;
    let newState = {
      currentSection: link,
    };

    event.preventDefault();

    if (this.state.currentSection === link) {
      return;
    }

    switch (link) {
      case 'about': {
        newState = {
          ...newState,
          currentPage: {
            ...pageMeta[link],
            content: aboutText,
          },
        };

        break;
      }
      case 'blog': {
        newState = {
          ...newState,
          currentPage: {
            ...pageMeta[link],
            content: posts,
            handlers: {
              onPostLinkClick: this.handlePostLinkClick,
            },
          },
        };

        break;
      }
      case 'contacts': {
        newState = {
          ...newState,
          currentPage: {
            ...pageMeta[link],
            content: contacts,
          },
        };

        break;
      }
      case 'users': {
        newState = {
          ...newState,
          currentPage: {
            ...pageMeta[link],
            content: users,
          },
        };

        break;
      }
    }
  
    this.setState(newState);
  });

  handlePostLinkClick = (link => event => {
    const post = this.props.data.posts.find(post => post.link === link);
    
    event.preventDefault();

    this.setState({
      currentSection: link,
      currentPage: {
        type: 'post',
        pageHeader: null,
        descText: null,
        content: post,
        handlers: {
          onPostCommentSubmit: this.handlePostCommentSubmit,
        },
      },
    });
  });

  handlePostCommentSubmit = (link, { username: author, text }) => {
    const post = this.props.data.posts.find(post => post.link === link);

    post.comments = [{ published: new Date(), author, text }].concat(post.comments);

    this.setState({
      currentSection: link,
      currentPage: {
        type: 'post',
        pageHeader: null,
        descText: null,
        content: post,
        handlers: {
          onPostCommentSubmit: this.handlePostCommentSubmit,
        },
      },
    });
  }

  render() {
    const { currentSection, currentPage } = this.state;
    const { data: { headerCaption, navBarItems, posts } } = this.props;

    return (
      <div className="layout">
        <Header caption={headerCaption} navBarItems={navBarItems} navPage={currentSection} onLinkClick={this.handleNavLinkClick} />
        <div className="main">
          <Aside posts={posts.map(post => ({title: post.title, link: post.link}))} navPage={currentSection} onLinkClick={this.handlePostLinkClick} />
          <Content pageContent={currentPage} />
        </div>
        <Footer />
      </div>
    );
  }
}
