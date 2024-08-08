var rootElement;
(function () {
  // Ensure the global configuration variables are set
  const config = window.MY_EMBED_APP_CONFIG || {};

  /** Ensure the root element exists
   * NOTE: This id should match the id of the root element in the React app index.tsx file
  */
  rootElement = document.getElementById('my-embed-app-react-root');
  if (!rootElement) {
    rootElement = document.createElement('div');
    rootElement.id = 'my-embed-app-react-root';
    document.body.appendChild(rootElement);
    
    // Style the root element to position it in the bottom right corner
    rootElement.style.display = 'none';
    rootElement.style.position = 'fixed';
    rootElement.style.bottom = '20px';
    rootElement.style.right = '20px';
    rootElement.style.zIndex = '99999999';
  }

  const script = document.createElement('script');
  script.setAttribute('src', `${config.domain}/static/js/main.js`);
  rootElement.appendChild(script);

})();

function openApp() {
  rootElement.style.display = 'block';
}
