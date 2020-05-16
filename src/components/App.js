import React from 'react';
import '../App.css';
import Tab from './Tab';

function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab><a>Tab 1</a></Tab>
          <Tab><a>Tab 2</a></Tab>
          <Tab><a>Tab 3</a></Tab>
        </div>
        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
