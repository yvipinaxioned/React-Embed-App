(function () {
  // Ensure the global configuration variables are set
  const config = window.MY_EMBED_APP_CONFIG || {};

  // Ensure the root element exists
  let rootElement = document.getElementById('my-embed-app-react-root');
  if (!rootElement) {
    rootElement = document.createElement('div');
    rootElement.id = 'my-embed-app-react-root';
    document.body.appendChild(rootElement);
  }

  // Step 1: Create a Shadow DOM
  const shadowRoot = rootElement.attachShadow({ mode: 'open' });

  // Step 2: Inject the main.js script into the Shadow DOM
  const styleSheet = document.createElement('link');
  styleSheet.setAttribute('rel', 'stylesheet');
  styleSheet.setAttribute('href', `${config.domain}/static/css/main.css`);
  shadowRoot.appendChild(styleSheet);

  const scriptElement = document.createElement('script');
  scriptElement.setAttribute('src', `${config.domain}/static/js/main.js`);
  shadowRoot.appendChild(scriptElement);

  // Step 3: Create a container for the React app within the Shadow DOM
  const reactRootElement = document.createElement('div');
  shadowRoot.appendChild(reactRootElement);

  // Step 4: Wait for the main.js to load and initialize the React app inside the Shadow DOM
  scriptElement.onload = () => {
    if (window.initializeApp) {
      window.initializeApp(config, reactRootElement);
    }
  };
})();
