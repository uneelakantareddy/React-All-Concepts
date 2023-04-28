import React, { useReducer } from "react";

const UseReducer = () => {
    const intialObject = { count: 0 };
    const Reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return { count: state.count + 1 };
            case "DECREMENT":
                return { count: state.count - 1 };
            case "INCREMENTBY5":
                return { count: state.count + 5 };

            default:
                return null;
        }
    };

    const [state, dispatch] = useReducer(Reducer, intialObject);

    return (
        <div>
            <h2>{state.count}</h2>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment Counter</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement Counter</button>
            <button onClick={() => dispatch({ type: "INCREMENTBY5" })}>Increment Counter By 5</button>
        </div>
    );
};

export default UseReducer;
