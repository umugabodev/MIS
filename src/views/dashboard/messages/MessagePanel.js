// MessagingPage.js

import React, { useState } from 'react';
import { FaInbox, FaStar, FaClock, FaFileAlt, FaEnvelopeOpenText, FaExclamationTriangle, FaTrashAlt } from 'react-icons/fa';

const MessagePanel = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Example list of users
  const users = [
    { id: 1, name: 'General Smith' },
    { id: 2, name: 'Commander Johnson' },
    { id: 3, name: 'Intel Team' },
    // Add more users as needed
  ];

  // Function to send a message
  const sendMessage = () => {
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: messageInput.trim(),
      sender: 'User1', // Replace with actual sender name or ID
      // timestamp: new Date().toISOString() // Optional: Include timestamp
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <div style={{ flex: 1, backgroundColor: '#333', color: '#fff', padding: '20px' }}>
        {/* Header */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>All Inboxes</h2>
        </div>

        {/* Main Menu */}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li
            onClick={() => setSelectedUser(null)} // Reset selected user when clicking main menu
            style={{
              cursor: 'pointer',
              padding: '10px',
              marginBottom: '5px',
              backgroundColor: selectedUser === null ? '#555' : 'transparent',
              borderRadius: '4px'
            }}
          >
            <FaInbox style={{ marginRight: '10px' }} />
            Primary
          </li>
          <li
            onClick={() => setSelectedUser(null)} // Reset selected user when clicking main menu
            style={{
              cursor: 'pointer',
              padding: '10px',
              marginBottom: '5px',
              backgroundColor: selectedUser === null ? '#555' : 'transparent',
              borderRadius: '4px'
            }}
          >
            <FaInbox style={{ marginRight: '10px' }} />
            Promotions
          </li>
          <li
            onClick={() => setSelectedUser(null)} // Reset selected user when clicking main menu
            style={{
              cursor: 'pointer',
              padding: '10px',
              marginBottom: '5px',
              backgroundColor: selectedUser === null ? '#555' : 'transparent',
              borderRadius: '4px'
            }}
          >
            <FaInbox style={{ marginRight: '10px' }} />
            Social
          </li>
          <li
            onClick={() => setSelectedUser(null)} // Reset selected user when clicking main menu
            style={{
              cursor: 'pointer',
              padding: '10px',
              marginBottom: '5px',
              backgroundColor: selectedUser === null ? '#555' : 'transparent',
              borderRadius: '4px'
            }}
          >
            <FaInbox style={{ marginRight: '10px' }} />
            Updates
          </li>
        </ul>

        {/* Sub-menu */}
        <div style={{ marginTop: '20px' }}>
          <h3 style={{ marginBottom: '10px', fontSize: '1.2em' }}>Next</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ cursor: 'pointer', padding: '10px', marginBottom: '5px' }}>
              <FaStar style={{ marginRight: '10px' }} />
              Starred
            </li>
            <li style={{ cursor: 'pointer', padding: '10px', marginBottom: '5px' }}>
              <FaClock style={{ marginRight: '10px' }} />
              Snoozed
            </li>
            <li style={{ cursor: 'pointer', padding: '10px', marginBottom: '5px' }}>
              <FaFileAlt style={{ marginRight: '10px' }} />
              Draft
            </li>
            <li style={{ cursor: 'pointer', padding: '10px', marginBottom: '5px' }}>
              <FaEnvelopeOpenText style={{ marginRight: '10px' }} />
              Spams
            </li>
            <li style={{ cursor: 'pointer', padding: '10px', marginBottom: '5px' }}>
              <FaTrashAlt style={{ marginRight: '10px' }} />
              Bin
            </li>
          </ul>
        </div>
      </div>

      {/* Main Section */}
      <div style={{ flex: 3, padding: '20px', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{ backgroundColor: '#555', color: '#fff', padding: '10px', marginBottom: '20px' }}>
          <h1 style={{ textAlign: 'center', margin: 0 }}>
            {selectedUser ? `Messaging with ${selectedUser.name}` : 'Select a Contact'}
          </h1>
        </div>

        {/* Messaging Area */}
        {selectedUser && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Message List */}
            <div style={{ flex: 1, overflowY: 'scroll', marginBottom: '20px' }}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  style={{
                    padding: '10px',
                    marginBottom: '10px',
                    alignSelf: message.sender === 'User1' ? 'flex-end' : 'flex-start',
                    maxWidth: '70%',
                    backgroundColor: message.sender === 'User1' ? '#3F51B5' : '#607D8B',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                >
                  <p style={{ margin: 0 }}>{message.text}</p>
                  <span style={{ fontSize: '0.8em', alignSelf: 'flex-end' }}>{message.sender}</span>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="text"
                placeholder="Type your message..."
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px',
                  fontSize: '16px',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  marginRight: '10px',
                }}
              />
              <button
                onClick={sendMessage}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagePanel;
