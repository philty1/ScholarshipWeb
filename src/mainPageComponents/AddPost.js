import React, { useState } from 'react';
import { FiEdit, FiCamera, FiVideo } from 'react-icons/fi';

const AddPost = () => {
  const [postText, setPostText] = useState('');
  const [mediaFile, setMediaFile] = useState(null);
  const [isTextAreaOpen, setTextAreaOpen] = useState(false);

  const handleChange = (event) => {
    setPostText(event.target.value);
  };

  const handleMediaUpload = (event) => {
    const file = event.target.files[0];
    setMediaFile(file);
  };

  const handleToggleTextArea = () => {
    setTextAreaOpen(!isTextAreaOpen);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the submission of the post, e.g., make an API call to save the post and media
    console.log('Post submitted:', postText);
    console.log('Media file:', mediaFile);
    setPostText('');
    setMediaFile(null);
  };

  const addPostStyle = {
    marginBottom: '20px',
  };

  const textareaContainerStyle = {
    display: isTextAreaOpen ? 'block' : 'none',
  };

  const textareaStyle = {
    width: '600px',
    minHeight: '100px',
    padding: '10px',
    border: '1px solid #CCCCCC',
    borderRadius: '4px',
    resize: 'vertical',
    marginBottom: '10px',
  };

  const mediaInputStyle = {
    display: 'none',
  };

  const buttonContainerStyle = {
    display: 'flex',
    marginBottom: '10px',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#283E4A',
    color: '#FFFFFF',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  const buttonIconStyle = {
    marginRight: '5px',
  };

  return (
    <div style={addPostStyle}>
      <div style={textareaContainerStyle}>
        <form onSubmit={handleSubmit}>
          <textarea
            style={textareaStyle}
            value={postText}
            onChange={handleChange}
            placeholder="Write your post..."
          />
          <div style={buttonContainerStyle}>
            <input
              type="file"
              id="mediaUpload"
              accept="image/*"
              onChange={handleMediaUpload}
              style={mediaInputStyle}
            />
            <label htmlFor="mediaUpload" style={buttonStyle}>
              <FiCamera style={buttonIconStyle} />
              Add Image
            </label>
            <input
              type="file"
              id="videoUpload"
              accept="video/*"
              onChange={handleMediaUpload}
              style={mediaInputStyle}
            />
            <label htmlFor="videoUpload" style={buttonStyle}>
              <FiVideo style={buttonIconStyle} />
              Add video
            </label>
            <button type="submit" style={buttonStyle}>
              <FiEdit style={buttonIconStyle} />
              Text
            </button>
          </div>
        </form>
      </div>
      <button onClick={handleToggleTextArea} style={buttonStyle}>
        <FiEdit style={buttonIconStyle} />
        Post
      </button>
    </div>
  );
};

export default AddPost;



