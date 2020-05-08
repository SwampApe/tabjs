import React from 'react';
import './App.css';
import Tabs from './components/tabjs/Tabs.js';
import Tab from './components/tabjs/Tab.js';
import TabDefault from './components/tabjs/TabDefault.js';
import CustomComponent from './components/tabjs/CustomComponent.js';
import './style/tabjs.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tabs>
            <Tab label="Tabjs">
                <a></a>
                <a></a>
            </Tab>
            <Tab label="Usage">
                <a>{'<Tab label="Tab Name">'}</a>
                <a>{String.fromCharCode(9) + '<a>Content</a>'}</a>
            </Tab>
            <Tab>
                <CustomComponent/>
            </Tab>
            <TabDefault>
                <CustomComponent/>
            </TabDefault>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
