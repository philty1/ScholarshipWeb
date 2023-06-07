import React, { useState } from 'react';
import styled from 'styled-components';

const MessagingContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 4px;
  padding: 20px;
`;

const MessageListContainer = styled.div`
  width: 300px;
`;

const MessageList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MessageItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#f6f6f6' : 'inherit')};

  &:hover {
    background-color: #f6f6f6;
  }
`;

const SenderAvatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 12px;
`;

const SenderName = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: #333333;
  margin-right: 8px;
`;

const ConversationContainer = styled.div`
  flex: 1;
  margin-left: 20px;
`;

const ConversationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const SenderAvatarLarge = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 12px;
`;

const SenderNameLarge = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #333333;
`;

const Conversation = styled.div`
  background-color: #f6f6f6;
  border-radius: 8px;
  padding: 16px;
  font-size: 14px;
  color: #333333;
  min-height: 200px;
`;

const Messaging = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);

  const conversations = [
    {
      id: 1,
      avatar: 'https://example.com/avatar1.jpg',
      senderName: 'John Doe',
      lastMessage: 'Hey, how are you?',
      conversation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac fermentum urna. Nulla fringilla, quam id euismod interdum.',
    },
    {
      id: 2,
      avatar: 'https://example.com/avatar2.jpg',
      senderName: 'Jane Smith',
      lastMessage: 'Looking forward to our meeting!',
      conversation: 'Ut fringilla, dolor sed efficitur lobortis, ex est mattis nisl, ac tincidunt ligula tortor id sapien. Quisque vitae rutrum neque.',
    },
  ];

  const handleSelectMessage = (messageId) => {
    setSelectedMessage(messageId);
  };

  return (
    <MessagingContainer>
      <MessageListContainer>
        <h2>Messages</h2>
        <MessageList>
          {conversations.map((conversation) => (
            <MessageItem
              key={conversation.id}
              active={selectedMessage === conversation.id}
              onClick={() => handleSelectMessage(conversation.id)}
            >
              <SenderAvatar src={conversation.avatar} alt={conversation.senderName} />
              <SenderName>{conversation.senderName}</SenderName>
            </MessageItem>
          ))}
        </MessageList>
      </MessageListContainer>
      <ConversationContainer>
        {selectedMessage ? (
          <>
            <ConversationHeader>
              <SenderAvatarLarge src={conversations[selectedMessage - 1].avatar} alt={conversations[selectedMessage - 1].senderName} />
              <SenderNameLarge>{conversations[selectedMessage - 1].senderName}</SenderNameLarge>
            </ConversationHeader>
            <Conversation>{conversations[selectedMessage - 1].conversation}</Conversation>
          </>
        ) : (
          <p>Select a message to view the conversation</p>
        )}
      </ConversationContainer>
    </MessagingContainer>
  );
};

export default Messaging;
