import React from 'react';

import Tab from './Tab.js';

class Tabs extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            activeTabId: 0,
            tabs: React.Children.map(this.props.children, (child) => {
                return React.cloneElement(child);
            })
        }
        this.handleTabClick = this.handleTabClick.bind(this);       
        this.handleNewTabClick = this.handleNewTabClick.bind(this);        
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
    
    getNewTab() {
        let id = this.state['tabs'].length;
        return (
            <Tab label={"tab " + id}>
                <a>new tabed lole</a>   
            </Tab>
        );
    }
    
    handleNewTabClick() {
        this.setState({
            tabs: [...this.state.tabs, this.getNewTab()]
        })
    }
    
    renderActiveTab() {
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