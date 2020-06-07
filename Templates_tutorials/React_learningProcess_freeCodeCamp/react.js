// xxxxxxxxxxxxxxxxxxxxxx

const JSX = <div></div>;
const JSX = <h1>Hello JSX!</h1>;
{/* comments*/ }


// xxxxxxxxxxxxxxxxxxxxxx
const JSX = (
    <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
    </div>
);
// change code below this line


ReactDOM.render(JSX, document.getElementById("challenge-node"));

// xxxxxxxxxxxxxxxxxxxxxxxxxxx
const JSX = (
    <div className="myDiv">
        <h1>Add a class to this div</h1>
    </div>
);
// xxxxxxxxxxxxxxxxxxxxxxxxxxx
const JSX = (
    <div>
        <h2>Welcome to React!</h2>
        <br />
        <p>Be sure to close all tags!</p>
        <hr />
    </div>
);
//All these three are the same xxxxxxxxxxxxxxxxxxxxxxxxxxx
const element = (
    <h1 className="greeting">
        Hello, world!
    </h1>
);

const element = React.createElement(
    'h1',
    { className: 'greeting' },
    'Hello, world!'
);

// Note: this structure is simplified
const element = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, world!'
    }
};

// To render a React element into a root DOM node xxxxxxxxxxxxxxxxxxxxxxxxxxx
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

// the only way to update the UI is to create a new element, and pass it to ReactDOM.render().xxxxxxxxxxxxxxxxxxxxxxxxxxx
function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

// Component in JS xxxxxxxxxxxxxxxxxxxxxxxxxxx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
// Component in ES6 xxxxxxxxxxxxxxxxxxxxxxxxxxx
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}


// xxxxxxxxxxxxxxxxxxxxxxxxxxx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
    element,
    document.getElementById('root')
);
// We call ReactDOM.render() with the <Welcome name="Sara" /> element.
// React calls the Welcome component with {name: 'Sara'} as the props.
// Our Welcome component returns a <h1>Hello, Sara</h1> element as the result.
// React DOM efficiently updates the DOM to match <h1>Hello, Sara</h1>.//


// Composing Components xxxxxxxxxxxx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// xxxxxxxxxxxxxxxxxxxxxxxxxxx
function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxx
class Kitten extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Hi</h1>
        );
    }
}

// xxxxxxxxxxxxxxxxxxxxxxxxxxx
const ChildComponent = () => {
    return (
        <div>
            <p>I am the child</p>
        </div>
    );
};

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>I am the parent</h1>
                <ChildComponent />
            </div>
        );
    }
};

// xxxxxxxxxxxxxxxxxxxxxxxxxxx
const TypesOfFruit = () => {
    return (
        <div>
            <h2>Fruits:</h2>
            <ul>
                <li>Apples</li>
                <li>Blueberries</li>
                <li>Strawberries</li>
                <li>Bananas</li>
            </ul>
        </div>
    );
};

const Fruits = () => {
    return (
        <div>
            <TypesOfFruit />
        </div>
    );
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
            </div>
        );
    }
};

// xxxxxxxxxxxxxxxxxxxxxxxxxxx
class Fruits extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Fruits:</h2>
                <ul>
                    <li>NonCitrus</li>
                    <li>Citrus</li>
                </ul>
            </div>
        );
    }
};

class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
                <Vegetables />
            </div>
        );
    }
};

// Render a Class Component to the DOM xxx ReactDOM.render(componentToRender, targetNode)
class TypesOfFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Types of Food:</h1>
                <Fruits />
                <Vegetables />
            </div>
        );
    }
};

ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))


// Write a React Component from Scratch. Remember, a typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML (from JSX) or null.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
};

ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))


// Pass Props to a Stateless Functional Component
const CurrentDate = (props) => {
    return (
        <div>
            <p>The current date is: {props.date}</p>
        </div>
    );
};

class Calendar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>What date is it?</h3>
                <CurrentDate date={Date()} />
            </div>
        );
    }
};


// Pass an Array as Props
// Array methods such as join() can be used when accessing the property. const ChildComponent = (props) => <p>{props.colors.join(', ')}</p> This will join all colors array items into a comma separated string and produce: <p>green, blue, red</p>
const List = props => {
    return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>To Do Lists</h1>
                <h2>Today</h2>
                <List tasks={["Walk", "Cook", "Bake"]} />
                <h2>Tomorrow</h2>
                <List tasks={["Study", "Code", "Eat"]} />
            </div>
        );
    }
}

// Use Default Props
// You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.
const ShoppingCart = (props) => {
    return (
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    )
};

ShoppingCart.defaultProps = {
    items: 0
};

// or {
//prop-x: value,
//prop-y: value,
//}

// Override Default Props
// syntax to add a prop to a component looks similar to how you add HTML attributes. Suntax is <Component propsName={Value}/>.
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
    quantity: 0
}

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items quantity={10} />
    }
};


// Use PropTypes to Define the Props You Expect
// MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};


Items.propTypes = { quantity: PropTypes.number.isRequired }


Items.defaultProps = {
    quantity: 0
};

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Items />
    }
};


// Access Props Using this.props
class ReturnTempPassword extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
            </div>
        );
    }
};

class ResetPassword extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                <h2>Reset Password</h2>
                <h3>We've generated a new temporary password for you.</h3>
                <h3>Please reset this password from your account settings ASAP.</h3>
                <ReturnTempPassword tempPassword="xxxxxxxx" />
            </div>
        );
    }
};


// Review Using Props with Stateless Functional Components
// A stateless functional component is any function you write which accepts props and returns JSX. A stateless component, on the other hand, is a class that extends React.Component, but does not use internal state (covered in the next challenge). Finally, a stateful component is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components

class CampSite extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Camper />
            </div>
        );
    }
};

const Camper = props => <p>{props.name}</p>;

Camper.defaultProps = {
    name: "CamperBot"
};

Camper.propTypes = {
    name: PropTypes.string.isRequired
};


// Create a Stateful Component
class StatefulComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Name"
        }

    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};

// Render State in the User Interface
class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};

// Render State in the User Interface Another Way
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'freeCodeCamp'
        }
    }
    render() {
        const name = this.state.name
        return (
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
};

// Set State with this.setState
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Initial State'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // change code below this line
        this.setState({
            name: 'React Rocks!'
        });
        // change code above this line
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};


// Bind 'this' to a Class Method
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            text: "You clicked!"
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click Me</button>
                <h1>{this.state.text}</h1>
            </div>
        );
    }
};

// Use State to Toggle an Element
// this.setState((state, props) => ({
// counter: state.counter + props.increment
/// }));


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        };
        // change code below this line
        this.toggleVisibility = this.toggleVisibility.bind(this);
        // change code above this line
    }
    // change code below this line
    toggleVisibility() {
        this.setState(state => {
            if (state.visibility === true) {
                return { visibility: false };
            } else {
                return { visibility: true };
            }
        });
    }
    // change code above this line
    render() {
        if (this.state.visibility) {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                    <h1>Now you see me!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleVisibility}>Click Me</button>
                </div>
            );
        }
    }
};

// Write a Simple Counter = CALCULATOR
// You can design a more complex stateful component by combining the concepts covered so far. These include initializing state, writing methods that set state, and assigning click handlers to trigger these methods.
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        // change code below this line
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
        // change code above this line
    }
    // change code below this line
    reset() {
        this.setState({
            count: 0
        });
    }
    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    decrement() {
        this.setState(state => ({
            count: state.count - 1
        }));
    }
    // change code above this line
    render() {
        return (
            <div>
                <button className='inc' onClick={this.increment}>Increment!</button>
                <button className='dec' onClick={this.decrement}>Decrement!</button>
                <button className='reset' onClick={this.reset}>Reset</button>
                <h1>Current Count: {this.state.count}</h1>
            </div>
        );
    }
};



// Create a Controlled Input
class ControlledInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    render() {
        return (
            <div>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} />
                <h4>Controlled Input:</h4>

                <p>{this.state.input}</p>
            </div>
        );
    }
};

// Create a Controlled Form (submit form)
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            submit: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    handleSubmit(event) {
        // change code below this line
        event.preventDefault()
        this.setState({
            submit: this.state.input
        });
        // change code above this line
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    { /* change code below this line */}
                    <input
                        value={this.state.input}
                        onChange={this.handleChange} />
                    { /* change code above this line */}
                    <button type='submit'>Submit!</button>
                </form>
                { /* change code below this line */}
                <h1>{this.state.submit}</h1>
                { /* change code above this line */}
            </div>
        );
    }
};

// Pass State as Props to Child Components
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot'
        }
    }
    render() {
        return (
            <div>
                <Navbar name={this.state.name} />
            </div>
        );
    }
};
class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Hello, my name is: {this.props.name}</h1>
            </div>
        );
    }
};

// Pass a Callback as Props (input field sends text to another field)
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value
        });
    }
    render() {
        return (
            <div>
                <GetInput
                    input={this.state.inputValue}
                    handleChange={this.handleChange} />
                <RenderInput
                    input={this.state.inputValue} />
            </div>
        );
    }
};

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange} />
            </div>
        );
    }
};

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
};

// Use the Lifecycle Method componentWillMount
// The componentWillMount() method is called before the render() method when a component is being mounted to the DOM.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // change code below this line
        console.log('Component is mounting...');
        // change code above this line
    }
    render() {
        return <div />
    }
};

// Use the Lifecycle Method componentDidMount
//There is a mock API call in componentDidMount(). It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of activeUsers in the h1. Watch what happens in the preview, and feel free to change the timeout to see the different effects.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUsers: null
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                activeUsers: 1273
            });
        }, 2500);
    }
    render() {
        return (
            <div>
                <h1>Active Users: {this.state.activeUsers}</h1>
            </div>
        );
    }
};

// Add Event Listeners
// The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality
// Attach an event listener in the componentDidMount() method for keydown events and have these events trigger the callback handleKeyPress(). You can use document.addEventListener() which takes the event (in quotes) as the first argument and the callback as the second argument. Then, in componentWillUnmount(), remove this same event listener. You can pass the same arguments to document.removeEventListener(). It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
    }
    componentDidMount() {
        // change code below this line
        document.addEventListener('keydown', this.handleKeyPress);
        // change code above this line
    }
    componentWillUnmount() {
        // change code below this line
        document.removeEventListener('keydown', this.handleKeyPress);
        // change code above this line
    }
    handleEnter() {
        this.setState({
            message: this.state.message + 'You pressed the enter key! '
        });
    }
    handleKeyPress(event) {
        if (event.keyCode === 13) {
            this.handleEnter();
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }
};


// Optimize Re-Renders with shouldComponentUpdate
// So far, if any component receives new state or new props, it re-renders itself and all its children. This is usually okay. But React provides a lifecycle method you can call when child components receive new state or props, and declare specifically if the components should update or not. The method is shouldComponentUpdate(), and it takes nextProps and nextState as parameters.
// This method is a useful way to optimize performance. For example, the default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use shouldComponentUpdate() to prevent this by comparing the props. The method must return a boolean value that tells React whether or not to update the component. You can compare the current props (this.props) to the next props (nextProps) to determine if you need to update or not, and return true or false accordingly.
//The shouldComponentUpdate() method is added in a component called OnlyEvens. Currently, this method returns true so OnlyEvens re-renders every time it receives new props. Modify the method so OnlyEvens updates only if the value of its new props is even. Click the Add button and watch the order of events in your browser's console as the lifecycle hooks are triggered.

class OnlyEvens extends React.Component {
    constructor(props) {
        super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Should I update?');
        // change code below this line
        return nextProps.value % 2 === 0;
        // change code above this line
    }
    componentDidUpdate() {
        console.log('Component re-rendered.');
    }
    render() {
        return <h1>{this.props.value}</h1>
    }
};

class Controller extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        this.addValue = this.addValue.bind(this);
    }
    addValue() {
        this.setState({
            value: this.state.value + 1
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.addValue}>Add</button>
                <OnlyEvens value={this.state.value} />
            </div>
        );
    }
};

// Introducing Inline Styles
// There are other complex concepts that add powerful capabilities to your React code. But you may be wondering about the more simple problem of how to style those JSX elements you create in React. You likely know that it won't be exactly the same as working with HTML because of the way you apply classes to JSX elements.
// If you import styles from a stylesheet, it isn't much different at all. You apply a class to your JSX element using the className attribute, and apply styles to the class in your stylesheet. Another option is to apply inline styles, which are very common in ReactJS development.
// Add a style attribute to the div in the code editor to give the text a color of red and font size of 72px. Note that you can optionally set the font size to be a number, omitting the units "px", or write it as "72px".
class Colorful extends React.Component {
    render() {
        return (
            <div style={{ color: "red", fontSize: 72 }}>Big Red</div>
        );
    }
};

// Add Inline Styles in React
// If you have a large set of styles, you can assign a style object to a constant to keep your code organized. Uncomment the styles constant and declare an object with three style properties and their values. Give the div a color of "purple", a font-size of 40, and a border of "2px solid purple". Then set the style attribute equal to the styles constant.
const styles = {
    color: "purple",
    fontSize: 40,
    border: "2px solid purple"
};
// change code above this line
class Colorful extends React.Component {
    render() {
        // change code below this line
        return (
            <div style={styles}>Style Me!</div>
            // change code above this line
        );
    }
};

// Use Advanced JavaScript in React Render Method
// You can also write JavaScript directly in your render methods, before the return statement, without inserting it inside of curly braces. This is because it is not yet within the JSX code. When you want to use a variable later in the JSX code inside the return statement, you place the variable name inside curly braces.
// In the code provided, the render method has an array that contains 20 phrases to represent the answers found in the classic 1980's Magic Eight Ball toy. The button click event is bound to the ask method, so each time the button is clicked a random number will be generated and stored as the randomIndex in state. On line 52, delete the string "change me!" and reassign the answer const so your code randomly accesses a different index of the possibleAnswers array each time the component updates. Finally, insert the answer const inside the p tags.
// MAGIC BALL WITH pre-PREPARED ANSWERS
const inputStyle = {
    width: 235,
    margin: 5
}

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: ''
        }
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if (this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    render() {
        const possibleAnswers = [
            "It is certain", "It is decidedly so", "Without a doubt",
            "Yes, definitely", "You may rely on it", "As I see it, yes",
            "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again",
            "Ask again later", "Better not tell you now", "Cannot predict now",
            "Concentrate and ask again", "Don't count on it", "My reply is no",
            "My sources say no", "Outlook not so good", "Very doubtful", "Most likely"
        ];
        const answer = possibleAnswers[this.state.randomIndex];
        return (
            <div>
                <input
                    type="text"
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle} /><br />
                <button onClick={this.ask}>Ask the Magic Eight Ball!</button><br />
                <h3>Answer:</h3>
                <p>
                    {answer}
                </p>
            </div>
        );
    }
};

// Render with an If-Else Condition
// Another application of using JavaScript to control your rendered view is to tie the elements that are rendered to a condition. When the condition is true, one view renders. When it's false, it's a different view. You can do this with a standard if/else statement in the render() method of a React component.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState({
            display: !this.state.display
        });
    }
    render() {
        // change code below this line
        if (this.state.display) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1>Displayed!</h1>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            );
        }
    }
};

// Use && for a More Concise Conditional
// {condition && <p>markup</p>}
// If the condition is true, the markup will be returned. If the condition is false, the operation will immediately return false after evaluating the condition and return nothing
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState(state => ({
            display: !state.display
        }));
    }
    render() {
        // change code below this line
        return (
            <div>
                <button onClick={this.toggleDisplay}>Toggle Display</button>
                {this.state.display && <h1>Displayed!</h1>}
            </div>
        );
    }
};


// Use a Ternary Expression for Conditional Rendering
// Age checker and 'if underage', then "Go away"
const inputStyle = {
    width: 235,
    margin: 5
}

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userAge: '',
            input: ''
        }
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: ''
        });
    }
    submit() {
        this.setState(state => ({
            userAge: state.input
        }));
    }
    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>;
        const buttonTwo = <button>You May Enter</button>;
        const buttonThree = <button>You Shall Not Pass</button>;
        return (
            <div>
                <h3>Enter Your Age to Continue</h3>
                <input
                    style={inputStyle}
                    type="number"
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                {
                    this.state.userAge === '' ?
                        buttonOne :
                        this.state.userAge >= 18 ?
                            buttonTwo :
                            buttonThree
                }
            </div>
        );
    }
};


// Render Conditionally from Props
// The code editor has two components that are partially defined for you: a parent called GameOfChance, and a child called Results. They are used to create a simple game where the user presses a button to see if they win or lose.
class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>
                {
                    this.props.fiftyFifty ?
                        'You Win!' :
                        'You Lose!'
                }
            </h1>
        )
    };
};

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        const expression = Math.random() >= .5;
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                <Results fiftyFifty={expression} />
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
};

// Change Inline CSS Conditionally Based on Component State
// You can also render CSS conditionally based on the state of a React component. To do this, you check for a condition, and if that condition is met, you modify the styles object that's assigned to the JSX elements in the render method. 
class GateKeeper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ input: event.target.value })
    }
    render() {
        let inputStyle = {
            border: '1px solid black'
        };
        if (this.state.input.length > 15) {
            inputStyle.border = '3px solid red';
        };
        return (
            <div>
                <h3>Don't Type Too Much:</h3>
                <input
                    type="text"
                    style={inputStyle}
                    value={this.state.input}
                    onChange={this.handleChange} />
            </div>
        );
    }
};

// Use Array.map() to Dynamically Render Elements
// Conditional rendering is useful, but you may need your components to render an unknown number of elements. Often in reactive programming, a programmer has no way to know what the state of an application is until runtime, because so much depends on a user's interaction with that program. Programmers need to write their code to correctly handle that unknown state ahead of time. Using Array.map() in React illustrates this concept.
const textAreaStyles = {
    width: 235,
    margin: 5
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: [],
            userInput: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        });
    }
    render() {
        const items = this.state.toDoList.map((item, i) => {
            return <li key={i}>{item}</li>
        });
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder="Separate Items With Commas" /><br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
};

// Give Sibling Elements a Unique Key Attribute
const frontEndFrameworks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];

function Frameworks() {
    const renderFrameworks = frontEndFrameworks.map((fw, i) => <li key={i}>{fw}</li>);
    return (
        <div>
            <h1>Popular Front End JavaScript Frameworks</h1>
            <ul>
                {renderFrameworks}
            </ul>
        </div>
    );
};

// Use Array.filter() to Dynamically Filter an Array
// The map array method is a powerful tool that you will use often when working with React. Another method related to map is filter, which filters the contents of an array based on a condition, then returns a new array. For example, if you have an array of users that all have a property online which can be set to true or false, you can filter only those users that are online by writing:
// let onlineUsers = users.filter(user => user.online);
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ]
        }
    }
    render() {
        const usersOnline = this.state.users.filter(user => {
            return user.online;
        });
        const renderOnlineUsers = usersOnline.map(user => {
            return (
                <li key={user.username}>{user.username}</li>
            );
        });
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>
                    {renderOnlineUsers}
                </ul>
            </div>
        );
    }
};

// Render React on the Server with renderToString
// So far, you have been rendering React components on the client. Normally, this is what you will always do. However, there are some use cases where it makes sense to render a React component on the server. Since React is a JavaScript view library and you can run JavaScript on the server with Node, this is possible. In fact, React provides a renderToString() method you can use for this purpose.
//There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines. Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div />
    }
};

// change code below this line
ReactDOMServer.renderToString(<App />);


// xxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxx

// xxxxxxxxxxxxxxxxxxxxxxxxxxx