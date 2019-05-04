import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = (props) => {
  const { post } = props;

  return (
    <div className="post">
      <PostHeader name={post.name} picture={post.picture} time={post.time} />
      <p>{post.content}</p>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
