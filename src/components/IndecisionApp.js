import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [], 
        selectedOption: undefined //gets shown in the modal
    };

    handleDeleteOptions = () => {
        //parentheisis for implicitly returning an object
        this.setState(() => ({ options: [] }));
        
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((oldState) => ({
            options: oldState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[randomNum]
        this.setState(() => ({
            selectedOption: option
        }));
    };

    handleAddOption = (option) => {
        if(!option)
        {
            return 'Please enter a valid value';
        } else if (this.state.options.indexOf(option) > -1) { //checking for a match 
            return 'This option already exists';
        }
        this.setState((oldState) => ({ options: oldState.options.concat(option)}));
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }));
    }

    componentDidMount = () => { //lifecycle method
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
                this.setState(() => ({options})) //puts the same array from last time
            }
        }
        catch (e) {
            //do nothing if data is valid
        }
    };

    componentDidUpdate = (oldProps, oldState) => {
        if (oldState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
        
    };

    componentWillUnmount = () => {
        //few use cases, switching pages and rendering something entirely new will trigger it 
        console.log('component will unmount')
    };

    render = () => {
        const subtitle = '"Indecision is the enemy of progress. Not saying yes to one possibility is saying no to them all." - Michael Haggstrom'
        return(
            <div>
                <Header  subtitle = {subtitle}/>
                <div className='container'>
                    <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                    />
                    <div className='widget'>
                        <Options   
                            options = {this.state.options}
                            handleDeleteOptions = {this.handleDeleteOptions}
                            handleDeleteOption = {this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption = {this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal
                    selectedOption = {this.state.selectedOption}
                    handleClearSelectedOption = {this.handleClearSelectedOption}
                />
            </div>
        )
    };
};

export default IndecisionApp;