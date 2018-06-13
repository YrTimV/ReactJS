import './PostListContainer.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPosts } from 'actions/posts';
import PostItem from 'components/PostItem';
import Loading from 'components/Loading';

class PostListContainer extends React.PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        userId: PropTypes.string,
      }),
    }),
  }

  render() {
    const { posts, loading, match: { params: { userId } } } = this.props;
    const postItems = (
      userId ?
      posts.filter((post) => post.userId == userId).map((post) => <PostItem key={post.id} post={post} />) :
      posts.map((post) => <PostItem key={post.id} post={post}/>)
    );

    return (loading ? <Loading /> :
      <React.Fragment>
        {userId ? <Link to="/posts">Show all posts</Link> : ''}
        <div className="postListContainer">{postItems}</div>
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { load, match: { userId } } = this.props;

    load(userId);
  }
}

function mapStateToProps(state, ownProps) {
  const { posts: { posts, loading, loadError } } = state;

  return {
    ...ownProps,
    posts,
    loading,
    loadError,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => loadPosts(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
