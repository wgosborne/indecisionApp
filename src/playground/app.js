//Using React Components 5/23/23
//Notes:
// Uppercase letters are how React determines a react component from html
// React components have to define render
// Creating a root div in the return statement allows me to have other elements side by side
// props are like html attributes
// bind resets context

//Stateless Functional Componenets 6/5/23
//Notes:
// use when we dont need state, just passing info and returning, presentational components
// faster than class based bc it doesn't have the overhead
// easier to read, write, and test
// basically copying and pasting whats returned in the class version

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);

        this.state = {
            options: []
        };
    }

    componentDidMount() { //lifecycle method
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

        
    }

    componentDidUpdate(oldProps, oldState) {
        if (oldState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
        
    }

    componentWillUnmount() {
        //few use cases, switching pages and rendering something entirely new will trigger it 
        console.log('component will unmount')
    }

    handleDeleteOptions() {
        //parentheisis for implicitly returning an object
        this.setState(() => ({ options: [] }));
        
    }

    handleDeleteOption(optionToRemove) {
        this.setState((oldState) => ({
            options: oldState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        let option = this.state.options[randomNum]
        alert(option);
    }

    handleAddOption(option) {
        if(!option)
        {
            return 'Please enter a valid value';
        } else if (this.state.options.indexOf(option) > -1) { //checking for a match 
            return 'This option already exists';
        }
        this.setState((oldState) => ({ options: oldState.options.concat(option)}));
    }

    render() {
        const subtitle = 'watch me fuck up your life'
        return(
            <div>
                <Header  subtitle = {subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options   
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

//giving a component default props, if we don't provide one it will default to this
Header.defaultProps = {
    title: 'Indecision'
};

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }

const Action = (props) => {
        return (
            <div>
                <button 
                    onClick = {props.handlePick}
                    disabled = {!props.hasOptions}
                    >
                    What Should I Do?
                </button>
            </div>
        )
}

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick = {this.props.handlePick}
//                     disabled = {!this.props.hasOptions}
//                     >
//                     What Should I Do?
//                 </button>
//             </div>
//         )
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button onClick = {props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option //props passed in below 
                        key = {option} 
                        optionText = {option}
                        handleDeleteOption = {props.handleDeleteOption}
                        /> 
                ))
            }
        </div>
    )
}

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) =>{
//                         return <Option key = {option} optionText = {option}/>
//                     })
//                 }
//             </div>
//         )
//     }
// }

const Option = (props) => {
    return (
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
    )
}

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Options: {this.props.optionText}
//             </div>
//         )
//     }
// }

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error })); //saving the error

        if (!error){
            e.target.elements.option.value = ""; //sets the input box back to empty
        }

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit = {this.handleAddOption}>
                    <input type = "text" name = "option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}

//stateless component example, don't need "this"
// const User = (props) => { 
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));