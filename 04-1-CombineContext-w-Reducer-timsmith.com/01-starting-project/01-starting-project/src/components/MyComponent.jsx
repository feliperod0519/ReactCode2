import { useContext } from 'react';
import { MyContext } from "./MyContext";

export default function MyComponent(){
    const {state, dispatch} = useContext(MyContext);

    return (
        <>
            <p>Name: {state.name}</p>
            <input id='i1' type="text" onChange={(e)=>{dispatch({type:'SET_NAME',name: e.target.value})}} /> 
        </>
    );
}
