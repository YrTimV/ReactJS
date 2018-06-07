import './PostItem.scss';
import React from 'react';
import PropTypes from 'prop-types';

export default class PostItem extends React.PureComponent {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.number.isRequired,
      userId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  }
  
  render() {
    const { post: { userId, id, title, body } } = this.props;

    return (
      <div className="postItem">
        Id: <span className="postId">{id}</span>
        <br />
        UserId: <span className="userId">{userId}</span>
        <br />
        Title: {title}
        <br />
        Body: {body}
      </div>
    );
  }
}
