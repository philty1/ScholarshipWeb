import React, { useState } from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProfilePicture = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
  cursor: pointer;
`;

const PersonalDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333333;
`;

const Location = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666666;
`;

const ImageUploadContainer = styled.div`
  margin-bottom: 20px;
`;

const ImagePreview = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const ImagePreviewOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PreviewContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
`;

const UpdatePhotoButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const UpdatePhotoButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RemovePhotoButton = styled.button`
  padding: 10px 20px;
  background-color: #dc3545;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TabItem = styled.div`
  padding: 10px;
  font-weight: bold;
  color: ${props => (props.active ? '#000' : '#999')};
  border-bottom: ${props => (props.active ? '2px solid #000' : 'none')};
  cursor: pointer;
`;

const ContentContainer = styled.div`
  /* Styles for the content area below the tabs */
`;

const FollowingContent = () => {
  return (
    <div>
      <h3>Following</h3>
      {/* Following content */}
    </div>
  );
};

const PostsContent = () => {
  return (
    <div>
      <h3>Posts</h3>
      {/* Posts content */}
    </div>
  );
};

const ApplicationsContent = () => {
  return (
    <div>
      <h3>Track Applications</h3>
      {/* Applications content */}
    </div>
  );
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState('following');
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleTabClick = tab => {
    setActiveTab(tab);
  };

  const handleImageUpload = event => {
    const file = event.target.files[0];

    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleOpenPreview = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  const handleUpdatePhoto = () => {
    const fileInput = document.getElementById('image-upload');
    fileInput.click();
  };

  const handleRemovePhoto = () => {
    setSelectedImage(null);
    setPreviewImage(null);
  };

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfilePicture
          src={previewImage || 'profile-picture.jpg'}
          alt="Profile Picture"
          onClick={handleOpenPreview}
        />
        <PersonalDetails>
          <Name>John Doe</Name>
          <Location>New York City</Location>
        </PersonalDetails>
      </ProfileHeader>

      <ImageUploadContainer>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
        {isPreviewOpen && (
          <ImagePreviewOverlay onClick={handleClosePreview}>
            <PreviewContainer>
              <ImagePreview src={previewImage || 'profile-picture.jpg'} alt="Preview" onClick={handleOpenPreview} />
              <UpdatePhotoButtons>
                <UpdatePhotoButton onClick={handleUpdatePhoto}>Update Photo</UpdatePhotoButton>
                <RemovePhotoButton onClick={handleRemovePhoto}>Remove Photo</RemovePhotoButton>
              </UpdatePhotoButtons>
            </PreviewContainer>
          </ImagePreviewOverlay>
        )}
      </ImageUploadContainer>

      <TabContainer>
        <TabItem active={activeTab === 'following'} onClick={() => handleTabClick('following')}>
          Following
        </TabItem>
        <TabItem active={activeTab === 'posts'} onClick={() => handleTabClick('posts')}>
          Posts
        </TabItem>
        <TabItem active={activeTab === 'applications'} onClick={() => handleTabClick('applications')}>
          Track Applications
        </TabItem>
      </TabContainer>

      <ContentContainer>
        {/* Render content based on the active tab */}
        {activeTab === 'following' && <FollowingContent />}
        {activeTab === 'posts' && <PostsContent />}
        {activeTab === 'applications' && <ApplicationsContent />}
      </ContentContainer>
    </ProfileContainer>
  );
};

export default Profile;
