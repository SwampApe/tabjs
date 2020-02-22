import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tabs from './components/tabjs/Tabs.js';
import Tab from './components/tabjs/Tab.js';
import TabDefault from './components/tabjs/TabDefault.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs>
            <Tab label="asdf">
                <a>nerd tab</a>
            </Tab>
            <Tab label="test">
                <a>tab kjghkhjk</a>
            </Tab>
            <Tab label="cdasf">
                <a>tab asdfasdf</a>
            </Tab>
            <TabDefault>
                <a>default tabb lole</a>
            </TabDefault>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
