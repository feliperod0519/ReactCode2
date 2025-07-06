/* Step 3: Create a component that provides the
 context and manages state with useReducer
 */

import { useReducer } from "react";
import { counterReducer } from "./counterReducer";
import { CouterContext } from "./CounterContext";

export function CounterProvider({children}){
    const [state,dispatch] = useReducer(counterReducer,{ count: 0 });
    console.log('Counter state:',state);
    return (
        <CouterContext.Provider value={{state,dispatch}}>
            {children}
        </CouterContext.Provider>
    );

}