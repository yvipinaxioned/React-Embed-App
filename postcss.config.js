// postcss.config.js
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-prefix-selector')({
      prefix: '.embed-app-', // Prefix for all Tailwind CSS classes
      transform: (prefix, selector, prefixedSelector) => {
        if (selector.startsWith('@media') || selector.startsWith('@supports')) {
          return prefixedSelector;
        }
        return prefix + selector;
      }
    }),
  ],
}
