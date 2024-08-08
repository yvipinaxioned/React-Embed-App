import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Read the configuration from the global variable
// @ts-ignore
const config = window.MY_EMBED_APP_CONFIG || {};

// Initialize the root element
const rootElement = document.getElementById('my-embed-app-react-root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App config={config} />
    </React.StrictMode>
  );
}

// Report web vitals (optional)
reportWebVitals();
