import React, { useState } from 'react';
import { Button, Popover, Card } from 'uiw';
import logo from './logo.svg';
import './App.css';

function Demo() {
  const [isOpen, setIsOpen] = useState(false);
  function handleVisibleChange(isVisbale: boolean) {
    setIsOpen(isVisbale)
  }
  return (
    <Popover
    trigger="click"
    placement="top"
    isOpen={isOpen}
    onVisibleChange={(isVisbale) => handleVisibleChange(isVisbale)}
    content={
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <Card bordered={false} title="Card标题" extra={<a href="#">更多</a>} style={{ width: 200 }}>
        <div>Are you sure you want to delete these items? You won't be able to recover them.</div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 15 }}>
          <Button size="small" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button type="danger" size="small" onClick={() => setIsOpen(false)}>
            Delete
          </Button>
        </div>
      </Card>
    }
  >
    <Button active={isOpen}>弹出目标</Button>
  </Popover>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
          <Demo />
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
