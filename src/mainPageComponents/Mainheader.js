import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo.png';

const HeaderContainer = styled.header`
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.5));
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const LogoImage = styled.img`
  width: 50px;

  @media (max-width: 768px) {
    width: 40px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #f2f2f2;
  margin-left: 10px;
  color: #333333;
  font-size: 14px;
  backdrop-filter: blur(5px);
  transition: background-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 150px;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    background-color: #ffffff;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 24px;
  color: #333333;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const MainHeader = () => {
  const handleNotificationClick = () => {
    // Implement your notification click functionality here
    console.log('Notification clicked!');
  };


  return (
    <HeaderContainer>
      <LogoImage src={logo} alt="Fundmyfuture" />
      <SearchContainer>
        <SearchInput type="text" placeholder="Search" />
        <Icon icon={faSearch} />
        <Icon icon={faBell} onClick={handleNotificationClick} />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default MainHeader;

