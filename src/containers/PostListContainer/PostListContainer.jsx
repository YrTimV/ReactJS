import './PostListContainer.scss';
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadPosts } from 'actions/posts';
import PostItem from 'components/PostItem';
import Loading from 'components/Loading';

class PostListContainer extends React.PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      userId: PropTypes.number,
    }),
  }

  render() {
    const { posts, loading, match } = this.props;

    return (
      <React.Fragment>
        {loading ? <Loading /> : <div className="postListContainer">{posts.map((post) => <PostItem key={post.id} post={post} /> )}</div>}
      </React.Fragment>
    );
  }

  componentDidMount() {
    const { load, match } = this.props;

    load(match.userId);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps,
    posts: state.posts.posts,
    loading: state.posts.loading,
    loadError: state.posts.loadError,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: () => loadPosts(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);
