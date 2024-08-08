// src/App.js

import React from 'react';
import Chatbot from './components/Chatbot';

const App = ({ config }) => {
  return (
    <div className="App">
      <div>
      <h1>Hello, Embedded App!</h1>
      <p>Client ID: {config.clientId}</p>
      <p>Token: {config.token}</p>
      <Chatbot />
    </div>
    </div>
  );
};

export default App;
