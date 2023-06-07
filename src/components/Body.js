import React from 'react';
import styled, { keyframes } from 'styled-components';
import featureIcon1 from '../images/feature-icon-1.mp4';

const BodyContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 40px;
  background-color: #F4F7FD;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 40px;
  }
`;

const fadeInUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInLeftAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInRightAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Heading = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
  color: #333333;
  animation: ${fadeInUpAnimation} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subheading = styled.p`
  font-size: 20px;
  margin-bottom: 40px;
  color: #777777;
  animation: ${fadeInUpAnimation} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeInUpAnimation} 1s ease-in;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FeatureIcon = styled.video`
  width: 100px;
  margin-bottom: 20px;
  animation: ${fadeInLeftAnimation} 1s ease-in;


  @media (max-width: 768px) {
    width: 60px;
    margin-bottom: 10px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #333333;
  animation: ${fadeInRightAnimation} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  text-align: center;
  color: #777777;
  animation: ${fadeInUpAnimation} 1s ease-in;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Body = () => {
  return (
    <BodyContainer>
      <Heading>Welcome to FundmyFuture</Heading>
      <Subheading>Connect with professionals and explore career opportunities.</Subheading>
      <FeaturesContainer>
        <Feature>
          <FeatureIcon autoPlay loop muted>
            <source src={featureIcon1} type="video/mp4" />
            Your browser does not support the video tag.
          </FeatureIcon>
          <FeatureTitle>Build Your Network</FeatureTitle>
          <FeatureDescription>
            Connect with professionals, colleagues, and industry experts to expand your network.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon autoPlay loop muted>
            <source src={featureIcon1} type="video/mp4" />
            Your browser does not support the video tag.
          </FeatureIcon>
          <FeatureTitle>Discover Job Opportunities</FeatureTitle>
          <FeatureDescription>
            Explore a wide range of job listings and discover new career opportunities.
          </FeatureDescription>
        </Feature>
        <Feature>
          <FeatureIcon autoPlay loop muted>
            <source src={featureIcon1} type="video/mp4" />
            Your browser does not support the video tag.
          </FeatureIcon>
          <FeatureTitle>Stay Informed</FeatureTitle>
          <FeatureDescription>
            Get updates on industry trends, news, and relevant insights from professionals in your field.
          </FeatureDescription>
        </Feature>
      </FeaturesContainer>
    </BodyContainer>
  );
};

export default Body;

