import { useState } from "react";
import Accordion from "./components/Lifting-State-3/Accordion";
import Counter from "./components/PreservingAndResetting-4/Counter";
import StateStatusForm from "./components/State-Status-1/StateStatusForm";
import MovingDot from "./components/State-Structure-2/MovingDot";
import { initialTask } from "./components/State-LogicWReducer-5/initialTasks";
import TaskApp from "./components/State-LogicWReducer-5/TaskWOReducer/TaskApp";
import TaskAppReducer from "./components/State-LogicWReducer-5/TaskWReducer/TaskAppReducer";
import PageOld from "./components/PropDrilling-6/PropDrillingOld-6/PageOld";
import PageNew from "./components/PropDrilling-6/PropDrillingWContext/PageNew";

function App() {
  
  const [tasks,setTasks] = useState(initialTask)
  const counter = <Counter/>

  return (
    <>
      {/* 6-Old */}
      <PageOld />
      {/* EOF 6 */}
      {/* 6-New */}
      <PageNew />
      {/* EOF 6 */}
      {/* 5 */}
      <TaskApp />
      <TaskAppReducer />
      {/* EOF 5 */}
      <StateStatusForm />
      <Accordion></Accordion>
      <div>
        {counter}
        {counter}
      </div>
      <MovingDot />
    </>
  );
}

export default App;
