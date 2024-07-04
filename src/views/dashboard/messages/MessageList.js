// src/App.js
import React, { useState, useEffect } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('User1'); // Mock user for demonstration purposes
  const [users, setUsers] = useState(['User1', 'User2']); // Mock users

  useEffect(() => {
    // Simulate receiving messages
    const interval = setInterval(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { user: 'User2', content: 'Hello!' }
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = { user, content: message };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage('');
  };

  const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    padding: '20px'
  };

  const chatWindowStyle = {
    width: '80%',
    height: '60vh',
    overflowY: 'scroll',
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#fff',
    marginBottom: '10px'
  };

  const messageStyle = {
    marginBottom: '10px',
    padding: '5px',
    backgroundColor: '#e9ecef',
    borderRadius: '5px'
  };

  const messageInputStyle = {
    display: 'flex',
    width: '80%',
    marginTop: '10px'
  };

  const inputStyle = {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px 0 0 4px'
  };

  const buttonStyle = {
    padding: '10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '0 4px 4px 0',
    cursor: 'pointer'
  };

  const userListStyle = {
    width: '80%',
    marginBottom: '20px'
  };

  const userListHeaderStyle = {
    marginBottom: '10px'
  };

  const userListUlStyle = {
    listStyleType: 'none',
    padding: 0
  };

  const userListItemStyle = {
    padding: '5px 0',
    backgroundColor: '#e9ecef',
    borderRadius: '5px'
  };

  return (
    <div style={appStyle}>
      <div style={userListStyle}>
        <h3 style={userListHeaderStyle}>Active Users</h3>
        <ul style={userListUlStyle}>
          {users.map((user, index) => (
            <li key={index} style={userListItemStyle}>{user}</li>
          ))}
        </ul>
      </div>
      <div style={chatWindowStyle}>
        {messages.map((msg, index) => (
          <div key={index} style={messageStyle}>
            <strong>{msg.user}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage} style={messageInputStyle}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </div>
  );
};

export default App;
