import React from 'react';
import styled from 'styled-components';

const PeopleYouMayKnowContainer = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 16px;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const PersonInfo = styled.div`
  flex: 1;
`;

const Name = styled.h4`
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  margin-bottom: 4px;
`;

const Occupation = styled.p`
  font-size: 12px;
  color: #666666;
`;

const ActionButton = styled.button`
  background-color: #0a66c2;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #095293;
  }
`;

const PeopleYouMayKnow = () => {
  const people = [
    {
      id: 1,
      name: 'John Doe',
      occupation: 'Software Engineer',
      avatar: 'https://example.com/avatar1.jpg',
    },
    {
      id: 2,
      name: 'Jane Smith',
      occupation: 'Graphic Designer',
      avatar: 'https://example.com/avatar2.jpg',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      occupation: 'Marketing Specialist',
      avatar: 'https://example.com/avatar3.jpg',
    },
  ];

  const handleConnect = (person) => {
    // Handle connect button click
    console.log(`Connect with ${person.name}`);
  };

  return (
    <PeopleYouMayKnowContainer>
      <Title>People You May Know</Title>
      {people.map((person) => (
        <Person key={person.id}>
          <Avatar src={person.avatar} alt={person.name} />
          <PersonInfo>
            <Name>{person.name}</Name>
            <Occupation>{person.occupation}</Occupation>
          </PersonInfo>
          <ActionButton onClick={() => handleConnect(person)}>Connect</ActionButton>
        </Person>
      ))}
    </PeopleYouMayKnowContainer>
  );
};

export default PeopleYouMayKnow;
