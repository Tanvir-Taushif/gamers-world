import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='my-4 fw-bold container'>
            <div className="blog my-3">
                <h4>How React Works?</h4>
                <p>React is a JavaScript library (not a framework) that uses declarative code to design user interfaces (UIs) in a predictable and efficient manner.It may be used to create single-page apps and mobile apps, as well as more complicated apps when combined with other libraries.Declarative code specifies the ultimate result rather than providing a step-by-step guide to achieving it. Declarative code is lighter, easier to comprehend and alter, and has fewer problems in practice. Declarative code is used to generate components, which are used to show data. Components are reusable user interfaces that allow you to divide an app into discrete blocks that work independently of one another. Components take an arbitrary data input (a prop) and return a React element that specifies what should be displayed on the screen. They can use props to interact with other components to create a complicated UI.</p>
            </div>
            <div className="blog my-3">
                <h4>How useState works?</h4>
                <p>useState is a Hook (function) that enables state variables to be used in functional components. This function takes the initial state and returns a variable with the current state value (not necessarily the starting state) and another function to update it.The starting state is the only input to the useState() Hook. The state, unlike classes, does not have to be an object. If all we need is a number or a string, we can keep it. It returns a pair of values: the current state and an update function. This is why const [count, setCount] = useState is written ().</p>
            </div>
        </div>
    );
};

export default Question;