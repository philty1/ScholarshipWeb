import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { firebase, auth, firestore } from '../firebase/firebase';
import { collection, query, orderBy, onSnapshot, addDoc } from 'firebase/firestore';



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

const MessageInputContainer = styled.div`
  margin-top: 16px;
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #dddddd;
  border-radius: 4px;
  font-size: 14px;
`;

const MessageButton = styled.button`
  margin-top: 8px;
  padding: 8px 16px;
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
`;

const Messaging = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [conversations, setConversations] = useState([]);
  const [conversation, setConversation] = useState([]); // Added missing state declaration
  const messagesCollectionRef = collection(firestore, 'messages');
  const messagesRef = query(messagesCollectionRef, orderBy('timestamp', 'desc'));
  

  useEffect(() => {
    const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
      const updatedConversations = snapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          avatar: data.avatar,
          senderName: data.senderName,
          latestMessage: data.latestMessage,
        };
      });
      setConversations(updatedConversations);
    });

    return () => unsubscribe();
  }, [messagesRef]);

  const handleSelectMessage = (messageId) => {
    setSelectedMessage(messageId);
    const selectedMessageRef = messagesRef.doc(messageId.toString());
    selectedMessageRef.get().then((doc) => {
      if (doc.exists) {
        const selectedConversation = doc.data().conversation;
        setConversation(selectedConversation);
      }
    });
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      const newMessage = {
        content: messageInput,
        senderId: auth.currentUser.uid,
        senderName: auth.currentUser.displayName,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      };
  
      addDoc(messagesCollectionRef, newMessage).then(() => {
        setMessageInput('');
      });
    }
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
              <div>
                <SenderName>{conversation.senderName}</SenderName>
                <span>{conversation.latestMessage}</span>
              </div>
            </MessageItem>
          ))}
        </MessageList>
      </MessageListContainer>
      <ConversationContainer>
        {selectedMessage ? (
          <>
            <ConversationHeader>
              <SenderAvatarLarge
                src={conversations[selectedMessage - 1].avatar}
                alt={conversations[selectedMessage - 1].senderName}
              />
              <SenderNameLarge>
                {conversations[selectedMessage - 1].senderName}
              </SenderNameLarge>
            </ConversationHeader>
            <Conversation>
              {conversation.map((message, index) => (
                <div key={index}>{message.content}</div>
              ))}
            </Conversation>
            <MessageInputContainer>
              <MessageInput
                type="text"
                placeholder="Type a message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <MessageButton onClick={handleSendMessage}>Send</MessageButton>
            </MessageInputContainer>
          </>
        ) : (
          <p>Select a message to view the conversation</p>
        )}
      </ConversationContainer>
    </MessagingContainer>
  );
};

export default Messaging;
