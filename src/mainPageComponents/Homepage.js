import React from 'react';
import styled from 'styled-components';

import Post from './Post';
import AddPost from './AddPost';
import Donate from './Donate';
import ScholarshipList from './ScholarshipList';

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 0px;
  padding: 0;
  margin-right: 0px; /* Add margin-right for spacing */
`;

const LeftContainer = styled.div`
  flex: 1;
  padding-right: 20px;
`;

const RightContainer = styled.div`
  width: 272px;
  background-color: #ffff;
  padding: 0;
`;

const Homepage = () => {
  return (
    <HomeContainer>
      <LeftContainer>
        <Donate />
        <AddPost />
        <Post />
      </LeftContainer>
      <RightContainer>
        <ScholarshipList />
      </RightContainer>
    </HomeContainer>
  );
};

export default Homepage;
