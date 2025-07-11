import { useState, useContext } from "react";
import { TasksDispatchContextwContext } from "./TaskAppwContext";

export default function AddTaskWContext(){
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContextwContext);
    
    return (
        <>
            <input
                placeholder="Add task"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={() => {
                                    setText('');
                                    dispatch({
                                        type: 'added',
                                        id: nextId++,
                                        text: text,
                                    }); 
            }}>Add</button>
        </>
    );
}

let nextId = 3;