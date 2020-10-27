SystemJS.config({
  baseURL:'https://unpkg.com/',
  defaultExtension: true,
  meta: {
    '*.jsx': {
      'babelOptions': {
        react: true
      }
    }
  },
  map: {
    'plugin-babel': 'systemjs-plugin-babel@latest/plugin-babel.js',
    'systemjs-babel-build': 'systemjs-plugin-babel@latest/systemjs-babel-browser.js',
    'react': 'react@17.0.1/umd/react.production.min.js',
    'react-dom': 'react-dom@17.0.1/umd/react-dom.production.min.js',
    'react-router-dom': 'react-router-dom@5.2.0/umd/react-router-dom.js',
    'prop-types': 'prop-types@15.6/prop-types.js',
    'classnames': 'classnames@2.2.6/index.js',
    '@material-ui/core': '@material-ui/core@3.2.2/umd/material-ui.development.js',
    '@material-ui/icons': '@material-ui/icons@3.0.1/index.js',
  },
  transpiler: 'plugin-babel'
});

SystemJS.import('./src/index.jsx')
  .catch(console.error.bind(console));