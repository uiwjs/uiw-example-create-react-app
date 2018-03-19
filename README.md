This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Using uiw in [create-react-app](https://github.com/facebookincubator/create-react-app).

## Modify Content

[config/webpack.config.dev.js](https://github.com/uiw-react/uiw-example-create-react-app/blob/2593e115545f491a80fa8730ea4b99fee48cb8d1/config/webpack.config.dev.js#L159-L191)

```diff
{
  test: /\.css$/,
+  test: /\.(css|less)$/,
  use: [
    require.resolve('style-loader'),
    {
      loader: require.resolve('css-loader'),
      options: {
        importLoaders: 1,
      },
    },
    {
      loader: require.resolve('postcss-loader'),
      options: {
        // Necessary for external CSS imports to work
        // https://github.com/facebookincubator/create-react-app/issues/2677
        ident: 'postcss',
        plugins: () => [
          require('postcss-flexbugs-fixes'),
          autoprefixer({
            browsers: [
              '>1%',
              'last 4 versions',
              'Firefox ESR',
              'not ie < 9', // React doesn't support IE8 anyway
            ],
            flexbox: 'no-2009',
          }),
        ],
      },
    },
+    require.resolve('less-loader'),
  ],
},
```

[package.json](https://github.com/uiw-react/uiw-example-create-react-app/blob/2593e115545f491a80fa8730ea4b99fee48cb8d1/package.json#L5-L47)

```diff
{
  "name": "uiw-example",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
+    "less": "^3.0.1",
+    "less-loader": "^4.1.0",
+    "uiw": "^1.7.0",
    ...
  },
}
```

[src/App.js](https://github.com/uiw-react/uiw-example-create-react-app/blob/2593e115545f491a80fa8730ea4b99fee48cb8d1/src/App.js#L2)

```diff
import React, { Component } from 'react';
+ import { Button } from 'uiw';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
+        <Button type="primary">主要按钮</Button>
+        <Button type="success">成功按钮</Button>
+        <Button type="info">信息按钮</Button>
+        <Button type="warn">警告按钮</Button>
+        <Button type="danger">错误按钮</Button>
      </div>
    );
  }
}

export default App;
```