import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const MessagePanel = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="message-panel">
      <MessageList messages={messages} />
      <MessageInput addMessage={addMessage} />
    </div>
  );
};

export default MessagePanel;
