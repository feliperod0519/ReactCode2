import { useReducer } from "react";
import { MyContext } from "./MyContext";
import { myReducer } from "./MyReducer";

//Step 2: Create Provider to wrap it up
//Step 4: Replace state in context with Reducer

const initialState = { name:'minou'}

export const MyContextProvider = ({children}) =>{

    //const [name,setName] = useState(""); //step2
    const [state,dispatch] = useReducer(myReducer,initialState); //step4

    return (
        <MyContext.Provider value={{ state, dispatch }}>
            {children}
        </MyContext.Provider>
    );

}
