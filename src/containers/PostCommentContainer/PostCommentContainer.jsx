import './PostCommentContainer.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadComments } from 'actions/comments';
import PostComment from 'components/PostComment';
import Loading from 'components/Loading';

class PostCommentContainer extends React.PureComponent {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        postId: PropTypes.string,
      }),
    }),
  }

  render() {
    const { comments, loading } = this.props;
    const postComments = comments.map((comment) => <PostComment key={comment.id} comment={comment}/>)

    return (loading ? <Loading /> :
      <React.Fragment>
        <Link to="/posts">Show all posts</Link>
        <div className="postCommentContainer">{postComments}</div>
      </React.Fragment>
    );

  }

  componentDidMount() {
    const { load, match: { params: { postId } } } = this.props;

    load(postId);
  }
}

function mapStateToProps(state, ownProps) {
  const { comments: { comments, loading, loadError } } = state;

  return {
    ...ownProps,
    comments,
    loading,
    loadError,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    ...props,
    load: (postId) => loadComments(dispatch, postId),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCommentContainer);
