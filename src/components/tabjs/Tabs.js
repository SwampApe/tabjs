import React from 'react';

import Tab from './Tab.js';
import TabDefault from './TabDefault.js';

class Tabs extends React.Component {
    constructor(props) {
        super(props); 
        this.initializeStateWithChildren();        
        this.handleTabClick = this.handleTabClick.bind(this);       
        this.handleNewTabClick = this.handleNewTabClick.bind(this);
    }
    
    initializeStateWithChildren() {
        let tabDefault;
        let tabs = React.Children.map(this.props.children, (child) => {
                if(!tabDefault && child.type == TabDefault) {
                    tabDefault = React.cloneElement(child);
                } else if(child.type == Tab) {                    
                    return React.cloneElement(child);
                }   
        });        
        this.state = {
            activeTabId: 0,
            tabs: tabs,
            tabDefault: tabDefault         
        }        
    }
    
    getUpdatedTabsWithProps() {
        return React.Children.map(this.state['tabs'], (child, id) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick,
                tabId: id,
                isActive: (id === this.state.activeTabId)                
            });
        });
    }

    handleTabClick(tabId) {
        this.setState({
           activeTabId: tabId
        });
    }
    
    getNewTab(state) {
        let id = state['tabs'].length;
        if(state['tabDefault'] !== undefined) {
            return (
                <Tab label={'tab ' + state['tabs'].length}>
                    {state['tabDefault'].props.children}
                </Tab>
            )
        } else {
            return ( 
                <Tab label={'tab ' + state['tabs'].length}>
                    <a>asdf</a>
                </Tab>
            );
        }
    }
    
    handleNewTabClick() {
        this.setState((prevState) => {
            return {
                tabs: [...prevState.tabs, this.getNewTab(prevState)]
            }
        })
    }
    
    renderActiveTab() {
        console.log(this.state);
        return this.state['tabs'][this.state.activeTabId].props.children;
    }

    render() {
        return (
            <>
                <div className="tab-nav">
                    {this.getUpdatedTabsWithProps()}
                </div>
                <div className="new-tab-button" onClick={this.handleNewTabClick}>
                    <a>+</a>
                </div>
                <div className="tab-content">
                    {this.renderActiveTab()}
                </div>
            </>
        ); 
    }    
}


export default Tabs