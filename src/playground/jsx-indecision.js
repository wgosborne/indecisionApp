// JSX - JavaScript XML
//Notes:
// Everything must be wrapped in a div
// Inputs can be text, email, password, etc
// Synthetic events page on react tells me about event handlers
// e.preventDefault() prevents full page reload

console.log('app.js is running');

const app = {
    title: "Indecision App",
    subtitle: "We make the hard choices for you",
    options: []
}
const root = document.getElementById("app");

const onFormSubmit = (e) => {
    //adds option to list
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option)
    {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const onRemoveAll = () => {
    //removes all options from list
    app.options = [];
    renderApp();
};

const onMakeDecision = () =>{
    //generates a random number to select an option
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
    
};

const numbers = [55, 101, 1000];

const renderApp = () => {
    //renders app to screen

    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subtitle && <p>{app.subtitle}</p>)}
            {app.options.length > 0 ? <p>Here are your options:</p> : <p>No Options to Display</p>}
            <button disabled = {app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, root);
}

renderApp();
