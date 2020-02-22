import React from 'react';

class Tab extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        
            <div className={"btn noselect tab" + (this.props.isActive ? " active-tab" : "")} onClick={() => this.props.onClick(this.props.tabId)}>
                <a>{this.props.label}</a>
            </div>
        )
    }    
}

export default Tab