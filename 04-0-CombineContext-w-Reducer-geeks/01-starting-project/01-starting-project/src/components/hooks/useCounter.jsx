// Step 4: Create a custom 
// hook to access the context

import { useContext } from "react";
import { CouterContext } from "../CounterContext";

export default function useCounter(){
    const context = useContext(CouterContext);
    if (!context){
        throw new Error(`useCounter must be used within a CounterProvider`);
    }
    return context;
}