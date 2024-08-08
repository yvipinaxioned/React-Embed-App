(function() {
  // Ensure the global configuration variables are set
  var config = window.MY_EMBED_APP_CONFIG || {};

  // Create a link element for the CSS
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `${config.domain}/static/css/main.css`;
  document.head.appendChild(link);

  // Ensure the root element exists
  var rootElement = document.getElementById('my-embed-app-react-root');
  if (!rootElement) {
    rootElement = document.createElement('div');
    rootElement.id = 'my-embed-app-react-root';
    document.body.appendChild(rootElement);
  }

  // Create a script element for the JS
  var script = document.createElement('script');
  script.src = `${config.domain}/static/js/main.js`;
  script.onload = function() {
    // Inject the config into the React app
    if (window.EMBEDDED_APP_INIT) {
      window.EMBEDDED_APP_INIT(config);
    }
  };
  document.body.appendChild(script);
})();
