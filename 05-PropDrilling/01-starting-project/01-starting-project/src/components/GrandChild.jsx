import { UserContext } from "./UserContext"
import { useContext } from "react";

let GrandChild = ()=>{
    const userName = useContext(UserContext);
    return <p>Hello : {userName}</p>
}

export default GrandChild = GrandChild;
