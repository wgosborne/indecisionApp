import React from "react";
//even if it doesn't look like we explicitly use it the JSX needs to be converted

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button
            className="button button--link"
            onClick = {(e) => {
                props.handleDeleteOption(props.optionText)
            }}
        >
            Remove
        </button>
    </div>
);


export default Option;