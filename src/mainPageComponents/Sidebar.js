import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faGraduationCap, faBookmark, faQuestionCircle, faCog, faSignOutAlt, faComment } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyDKaSnAjZeQkN3lG7RcBT71L--w6AmeJSo",
  authDomain: "scholarship-8e353.firebaseapp.com",
  projectId: "scholarship-8e353",
  storageBucket: "scholarship-8e353.appspot.com",
  messagingSenderId: "338237058435",
  appId: "1:338237058435:web:d5ea802cb1792feb25dab6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SidebarContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 250px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SidebarHeading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #0a66c2;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SidebarLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: #666666;
  text-decoration: none;
  margin-bottom: 15px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #0a66c2;
  }

  &.active {
    color: #0a66c2;
    font-weight: bold;
  }
`;

const SidebarDivider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid #ccc;
  margin: 15px 0;
`;

const SidebarIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  margin-right: 10px;
  color: #666666;
`;

const Sidebar = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        navigate('/'); // Redirect the user to the sign-in page
      })
      .catch((error) => {
        // An error happened.
        console.error('Sign Out Error:', error);
      });
  };

  return (
    <SidebarContainer>
      <SidebarHeading>FundmyFuture</SidebarHeading>
      <SidebarContent>
        <SidebarLink to="/mainpage" activeClassName="active">
          <SidebarIcon icon={faHome} />
          Home
        </SidebarLink>
        <SidebarLink to="/mainpage/profile" activeClassName="active">
          <SidebarIcon icon={faUser} />
          My Profile
        </SidebarLink>
        <SidebarLink to="/mainpage/scholarship" activeClassName="active">
          <SidebarIcon icon={faGraduationCap} />
          Scholarship
        </SidebarLink>
        <SidebarLink to="/mainpage/messaging" activeClassName="active">
          <SidebarIcon icon={faComment} />
          Messaging
        </SidebarLink>
        <SidebarDivider />
        <SidebarLink to="/mainpage/bookmarked" activeClassName="active">
          <SidebarIcon icon={faBookmark} />
          Bookmarked
        </SidebarLink>
        <SidebarLink to="/mainpage/help" activeClassName="active">
          <SidebarIcon icon={faQuestionCircle} />
          Help
        </SidebarLink>
        <SidebarLink to="/mainpage/settings" activeClassName="active">
          <SidebarIcon icon={faCog} />
          Settings
        </SidebarLink>
        <SidebarDivider />
        <SidebarLink onClick={handleSignOut}>
          <SidebarIcon icon={faSignOutAlt} />
          Sign Out
        </SidebarLink>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
