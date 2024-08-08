import React from 'react';
import Chatbot from './components/Chatbot';

interface AppProps {
  config: {
    clientId: string;
    token: string;
  };
}

const App: React.FC<AppProps> = ({ config }) => {
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
