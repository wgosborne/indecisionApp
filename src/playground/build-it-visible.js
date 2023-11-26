//5/26/23 moving it to use state instead

class InvisibilityApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        this.state = {
            visibility: false
        }
    }

    handleToggle() {
        this.setState((oldState) => {
            return {
                visibility: !oldState.visibility //make sure to include the .visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Invisibility App</h1>
                <button onClick = {this.handleToggle}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>Here are some details. Bitch</p>}
            </div>
        )
    }
}

ReactDOM.render(<InvisibilityApp/>, document.getElementById('app'));


//5/21/23 app that hides and shows text when you click it 
//Notes:
// start by making a render function and calling it below
// inside make a const template and call ReactDOM.render after
// put a div inside the template

// console.log("The Invisibility App is running!")

// const invisibilityApp = {
//     title: "Invisibility App"
// }
// const app = document.getElementById("app");

// let check = false;
// const onDetails = () => {
//     check = !check;
//     renderInvisibilityApp();
// };


// const renderInvisibilityApp = () => {
//     const template = (
//         <div>
//             <h1>{invisibilityApp.title}</h1>
//             <button onClick = {onDetails}>
//                 {check ? 'Hide Details' : 'Show Details'}
//             </button>
//             {(check) && (<p>here are some details</p>)}
//         </div>
//     )

//     ReactDOM.render(template, app)
// };

// renderInvisibilityApp();