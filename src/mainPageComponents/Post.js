import React from 'react';

const Post = () => {
  const postStyle = {
    background: '#FFFFFF',
    padding: '20px',
    marginBottom: '20px',
  };

  const postTitleStyle = {
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const postContentStyle = {
    color: '#555555',
  };

  return (
    <div style={postStyle}>
      <div style={postTitleStyle}>Post Title</div>
      <div style={postContentStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum enim in luctus tincidunt. Donec a semper lectus, nec feugiat ex. Suspendisse potenti. Fusce at rhoncus libero.</div>
    </div>
  );
};

export default Post;
