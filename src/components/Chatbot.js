import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, user: 'user' }]);
      setInput('');

      // Add logic to handle bot response
      // For example, you can use an API call to get a response from your chatbot backend
      const botResponse = 'Hello! How can I help you?';
      setMessages([...messages, { text: input, user: 'user' }, { text: botResponse, user: 'bot' }]);
    }
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.user}`}>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;
