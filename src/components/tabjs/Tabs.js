import React, {useState} from 'react';

import Tab from './Tab.js';
import TabDefault from './TabDefault.js';

function Tabs(props) {
    
    function init(props) {
        console.log(props);
        let tabDefault = null;
        let tabs = React.Children.map(props.children, (child) => {
                if(!tabDefault && child.type == TabDefault) {
                    tabDefault = React.cloneElement(child);
                } else if(child.type == Tab) {                    
                    return React.cloneElement(child);
                }   
        });        
        return {
            tabs: tabs,
            tabDefault: tabDefault
        }
    }
    
    const [initState, ] = useState(() => init(props));    
    const [activeTabId, setActiveTabId] = useState(0);
    const [tabs, setTabs] = useState(initState['tabs']);
    const [tabDefault, setTabDefault] = useState(initState['tabDefault']);
    
    function getUpdatedTabsWithProps() {
        return React.Children.map(tabs, (child, id) => {
            return React.cloneElement(child, {
                onClick: () => setActiveTabId(id),
                tabId: id,
                isActive: (id === activeTabId)
            });
        });
    }
    
    function setTabLabel(id, label) {
        let newTabs = [...tabs];
        if('label' in newTabs[id]['props'] && newTabs[id]['props']['label'].valueOf() == label.valueOf()) {
            console.log('inside');
            return;
        }
        newTabs[id] = React.cloneElement(newTabs[id], {
            'label': label
        });
        setTabs(newTabs);
    }
         
    function getNewTab() {
        let id = tabs.length;
        return (
            <Tab label={'tab ' + id}>
                {tabDefault.props.children}
            </Tab>
        )
    }
    
    function getNewTabButtonIfDefaultExists() {
        if(tabDefault) {
            return (
                <div className="btn noselect new-tab-button" onClick={() => {setTabs([...tabs, getNewTab()]); setActiveTabId(tabs.length)}}>
                    <a>+</a>
                </div>
            )
        } else {
            return (<></>);
        }
    }
    
    function getChildrenWithSetTabLabel(children, id) {
        return React.Children.map(children, (child) => { 
            return (typeof child.type === 'function') ? (
                React.cloneElement(child, {
                setTabLabel: (label) => setTabLabel(id, label),
                tabId: id
                })
            ) : (
                React.cloneElement(child)
            )
        })
        
    }
    
    function renderActiveTab() {
        return React.Children.map(tabs, (tab, id) => {
            console.log(tab);
            return (
                <div className={"tab-content" + (activeTabId === id ? "" : " hidden")}>
                    {getChildrenWithSetTabLabel(tab.props.children, id)}   
                </div>
            )  
        });
    }
    
    return (
        <>
            <div className="tab-nav">
                {getUpdatedTabsWithProps()}
                {getNewTabButtonIfDefaultExists()}
            </div>
            <div className="tab-contents">
                {renderActiveTab()}
            </div>
        </>
    ); 
}



export default Tabs