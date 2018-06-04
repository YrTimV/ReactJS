import './Content.scss';
import React from 'react';

import PageAbout from 'components/PageAbout';
import PageBlog from 'components/PageBlog';
import PageContacts from 'components/PageContacts';
import PagePost from 'components/PagePost';
import UserListContainer from 'containers/UserListContainer';

export default class Content extends React.PureComponent {
  render() {
    const { pageContent: { pageHeader, descText, content, handlers } } = this.props;
    let pageContent;

    switch (this.props.pageContent.type) {
      case 'about': pageContent = <PageAbout content={content} />; break;
      case 'blog': pageContent = <PageBlog content={content} handlers={handlers} />; break;
      case 'contacts': pageContent = <PageContacts content={content} />; break;
      case 'post': pageContent = <PagePost content={content} handlers={handlers} />; break;
      case 'users': pageContent = <UserListContainer content={content} />; break;
    }
    
    return (
      <main className="content">
        {pageHeader && <h1>{pageHeader} {descText && <small>{descText}</small>}</h1>}
        {pageContent}
      </main>
    );
  }
}
