import { Button } from 'uiw';
import GitHubCorners from '@uiw/react-github-corners';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <GitHubCorners
        target="__blank"
        href="https://github.com/uiwjs/uiw-example-create-react-app"
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Button type="primary">主要按钮</Button>
          <Button type="success">成功按钮</Button>
          <Button type="warning">警告按钮</Button>
          <Button type="danger">错误按钮</Button>
          <Button type="light">亮按钮</Button>
          <Button type="dark">暗按钮</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
