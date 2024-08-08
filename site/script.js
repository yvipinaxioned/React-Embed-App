(function () {
  // Ensure the global configuration variables are set
  const config = window.MY_EMBED_APP_CONFIG || {};

  /** Ensure the root element exists
   * NOTE: This id should match the id of the root element in the React app index.tsx file
  */
  let rootElement = document.getElementById('my-embed-app-react-root');
  if (!rootElement) {
    rootElement = document.createElement('div');
    rootElement.id = 'my-embed-app-react-root';
    document.body.appendChild(rootElement);
  }

  const script = document.createElement('script');
  script.setAttribute('src', `${config.domain}/static/js/main.js`);
  rootElement.appendChild(script);

  const reactDiv = document.createElement('div');
  rootElement.appendChild(reactDiv);

})();
