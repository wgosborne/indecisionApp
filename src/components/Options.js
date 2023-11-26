import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
                className='button button--link' //to use the modifier just add the space and it will run the modifier on top
                onClick = {props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        
        {props.options.length === 0 && <p className='widget__message'>Please add an option to get started!</p>}
        {
            props.options.map((option, index) => (
                <Option //props passed in below 
                    key = {option} 
                    optionText = {option}
                    count = {index + 1} //increment by 1 because it starts at 0
                    handleDeleteOption = {props.handleDeleteOption}
                    /> 
            ))
        }
    </div>
);

export default Options;