import { useContext } from "react";
import Task from "./Task";
import { TaskListContext } from "./TaskListContext";

const TaskList = () => {
    const {tasks} = useContext(TaskListContext)
  return (
        <div>
          {  tasks.length ? 
            (<ul className="list">
              {tasks.map((task,index) => <Task key={index} task={task}/>)
                }
              </ul>) : <div className="no-tasks">No Tasks</div> }
        </div>
  )
};

export default TaskList;
