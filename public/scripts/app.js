'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _IndecisionApp = require('./components/IndecisionApp');

var _IndecisionApp2 = _interopRequireDefault(_IndecisionApp);

require('./styles/styles.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//importing react and reactdom
//How to compile JSX from webpack
//go to webpack.config.js
var Layout = function Layout() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'p',
            null,
            'Header'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Footer'
        )
    );
};

_reactDom2.default.render(_react2.default.createElement(_IndecisionApp2.default, null), document.getElementById('app'));

// const Layout = (props) => {
//     return(
//       <div>
//         <p>Header</p>
//         {props.children}
//         <p>Footer</p>
//       </div>  
//     );
// };

// ReactDOM.render((
//     <Layout>
//         <div>
//             <h1>Page Title</h1>
//             <p>This is my page</p>
//         </div>
//     </Layout>
//     ), document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Wags';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi there banana luver, my name is ${this.name}`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting);

// //New Syntax ---------
// class NewSyntax {
//     name = 'Waggies';
//     getGreeting = () => {
//         return `Hi there banana luver, my name is ${this.name}`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGreeting = newSyntax.getGreeting;
// console.log(newGreeting);

// //importaing utils, it runs first
// //import './utils.js';

// import subtract, {square, add} from './utils.js';
// //defaults do not need to be referenced by name. Just grabbing theee default export
// //use the one big one as the default and the named can be smaller ones
// //position is important for default


// console.log('app.js is running!!!!!');
// console.log(square(4));
// console.log(add(100,23));
// console.log(subtract(3,1))

// //Challenge
// import isSenior, {isAdult, canDrink} from './person.js'

// console.log(isAdult(21));
// console.log(canDrink(21));
// console.log(isSenior(64));

// //8/17/23 instaling using npm
// //install -> import -> use
// import validator from 'validator';
// //the code only gets included hwhen I import and use, not just add. require is es5 node diction

// console.log(validator.isEmail('test@banana.com'));
