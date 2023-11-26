//5/25/23 Rendering the counter app using state
//Notes:
// must have the props and super props
// default state is defined in constructor
// state just changes specific values we specify

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const stringCount = localStorage.getItem('count')
        const count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
            this.setState(() => ({count}));
        }
    }

    componentDidUpdate(oldProps, oldState) {
        if(oldState.count !== this.state.count) { //cheaper to check before storing
            localStorage.setItem('count', this.state.count);
        }
    }

    handleMinusOne() {
        this.setState((oldState) => {
            return {
                count: oldState.count -1
            }
        })
    }

    handleAddOne() {
        this.setState((oldState) => {
            return{
                count: oldState.count +1
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>Count : {this.state.count}</h1>
                <button onClick = {this.handleAddOne}> + 1 </button>
                <button onClick = {this.handleMinusOne}> - 1 </button>
                <button onClick = {this.handleReset}> reset </button>
            </div>
        );
    }
}





ReactDOM.render(<Counter />, document.getElementById('app'));



// //5/21/23
// //Notes: need to use className instead of class in JSX, don't need a parenthesis
// //      This is what is happening behind the scenses
// let count = 0;
// const id = "someId"

// const addOne = () => {
//     //console.log("add 1");
//     count ++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     //console.log("minus 1");
//     count --;
//     renderCounterApp();
// };

// const reset = () => {
//     //console.log("reset");
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id={id} className="button" onClick = {addOne}> +1 </button> 
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>reset</button>
//         </div>
//     );
    
//     ReactDOM.render(templateTwo, root);

// }

// renderCounterApp();