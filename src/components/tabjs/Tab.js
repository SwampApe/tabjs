import React from 'react';

class Tab extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className={"tab" + (this.props.isActive ? " active-tab" : "")} >
                <a onClick={() => this.props.onClick(this.props.tabId)}>{this.props.label}</a>
            </div>
        )
    }    
}

export default Tab