import React, {useState} from 'react';

function Tab(props) {
    return (        
        <div className={"btn noselect tab" + (props.isActive ? " active-tab" : "")} onClick={props.onClick}>
            <a>{props.label}</a>
        </div>
    );
}
export default Tab