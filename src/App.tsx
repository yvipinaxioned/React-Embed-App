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
    <div className="bg-gray-100">
      <div className="container mx-auto p-4 bg-white shadow-lg rounded">
        <h1 className="text-2xl font-bold mb-4">Hello, Embedded App!</h1>
        <p className="text-lg mb-2">Client ID: {config.clientId}</p>
        <p className="text-lg mb-4">Token: {config.token}</p>
        <Chatbot />
      </div>
    </div>
  );
};

export default App;
