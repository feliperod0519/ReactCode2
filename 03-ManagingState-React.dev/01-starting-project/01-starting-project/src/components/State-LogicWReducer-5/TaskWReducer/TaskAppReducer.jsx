import { useReducer } from 'react'
import tasksReducer from './taskReducer.jsx'
import AddTask from '../TaskWOReducer/AddTask.jsx';
import TaskList from '../TaskWOReducer/TaskList.jsx';
import { initialTask } from '../initialTasks.js';

export default function TaskAppReducer() {

    const [tasks, dispatch] = useReducer(tasksReducer,initialTask);
    let nextId = 3;

    function handleAddTask(text) {
        dispatch({
        type: 'added',
        id: nextId++,
        text: text,
        });
    }

    function handleChangeTask(task) {
        dispatch({
        type: 'changed',
        task: task,
        });
    }

    function handleDeleteTask(taskId) {
        dispatch({
        type: 'deleted',
        id: taskId,
        });
    }

    return (
        <>
            <h1>Prague itinerary w/Reducer</h1>
            <AddTask onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
  );
}