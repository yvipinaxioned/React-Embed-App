import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Read the configuration from the global variable
declare global {
  interface Window {
    MY_EMBED_APP_CONFIG: any;
  }
}
const config = window.MY_EMBED_APP_CONFIG || {};

// Initialize the root element
const rootElement = document.getElementById('my-embed-app-react-root')!;

if (rootElement) {
  // Load react app in Shadow DOM when production
  if (process.env.NODE_ENV === 'production') {
    const shadowRoot = rootElement.attachShadow({ mode: 'open' });

    // Load CSS in Shadow DOM after react build process
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', `${config.domain}/static/css/main.css`);
    shadowRoot.appendChild(link);

    const reactShadowRoot = document.createElement('div');
    shadowRoot.appendChild(reactShadowRoot);

    if (reactShadowRoot) {
      const root = ReactDOM.createRoot(reactShadowRoot);
      root.render(
        <React.StrictMode>
          <App config={config} />
        </React.StrictMode>
      );
    }
  } else {  
    // Load react app in root element when development
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App config={config} />
      </React.StrictMode>
    );
  }

  // Report web vitals (optional)
  reportWebVitals();
}
