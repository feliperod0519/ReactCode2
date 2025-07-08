/* 
    Step 5: Use the custom hook to access
    state and dispatch actions
 */

import useCounter from "./hooks/useCounter";

export default function Counter(){

    const {state, dispatch} = useCounter();
    return (
        <div>
            <h2>Counter: {state.count}</h2>
            <button onClick={
                () => dispatch({
                    type: 'inc'
                })
            }>
                Increment
            </button>
            <button onClick={
                () => dispatch({
                    type: 'dec'
                })
            }>
                Decrement
            </button>
        </div>
    );
}