import React, {useState} from 'react';

function CustomComponent(props) {
    
    //const [,] = useState(() => props.setTabLabel("Custom"));
    props.setTabLabel("Custom " + props.tabId);
    return (
        <a>Custom tab label from component</a>    
    )
}

export default CustomComponent;