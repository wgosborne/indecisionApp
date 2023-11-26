import React from "react";
//even if it doesn't look like we explicitly use it the JSX needs to be converted

const Option = (props) => (
    <div>
        {props.optionText}
        <button 
            onClick = {(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            remove
        </button>
    </div>
);


export default Option;