import './PostItem.scss';
import React from 'react';
import { Link } from 'react-router-dom';
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
        Id: <Link to={`/post/${id}`} className="postId">{id}</Link>
        <br />
        UserId: <Link to={`/posts/${userId}`} className="userId">{userId}</Link>
        <br />
        Title: {title}
        <br />
        Body: {body}
      </div>
    );
  }
}
