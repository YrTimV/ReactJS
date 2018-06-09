import './PostComment.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class PostComment extends React.PureComponent {
  static propTypes = {
    comment: PropTypes.shape({
      id: PropTypes.number.isRequired,
      postId: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }
  
  render() {
    const { comment: { id, postId, name, email, body } } = this.props;

    return (
      <div className="postComment">
        Id: <span className="commentId">{id}</span>
        <br />
        PostId: <span className="postId">{postId}</span>
        <br />
        Name: {name}
        <br />
        Email: {email}
        <br />
        Body: {body}
      </div>
    );
  }
}
