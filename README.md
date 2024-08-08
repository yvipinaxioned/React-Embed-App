# Getting Started with React Embedded App

This project uses craco to override the webpack configuration and add the necessary configuration to support the embedded app.

## Run the app for development

```bash
# Install the dependencies
yarn install

# Start the development server
yarn start
```


## Build the app for production

```bash
# Build the app
yarn build
```

## Run the app in production mode

```bash
# Run the app in production mode on port 3000
serve -s build -l 3000
```

## Run the client app in `/site` folder

```bash
# Run the client app in the `/site` folder on port 4000
serve -s site -l 4000
```

Update the config in the `site/index.html` file to point to the correct URL of the embedded app.
Use this file to add any additional configuration for the embedded app.

```html
<script>
  window.MY_EMBED_APP_APP_CONFIG = {
    // Note: URL of the embedded app is required
    domain: 'http://localhost:3000', 

    // Optional: Add any additional configuration here
    clientId: '1234',
    token: '5678',
  };
</script>
```
