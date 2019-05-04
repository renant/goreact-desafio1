import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = (props) => {
  const { picture, name, time } = props;
  return (
    <div className="post-header-box">
      <img className="picture" src={picture} alt="userImage" />
      <div className="legend">
        <strong>{name}</strong>
        <span>{time}</span>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
