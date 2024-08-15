import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

// console.log(tasks);

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-cyan-800 text-4xl font-bold text-center">Todavía no hay tareas</h1>;
  }
  // console.log(tasks[1].title)
  
  return (
    <div className="grid grid-cols-4 gap-2 p-4">
      {tasks.map((tk) => (
        <TaskCard key={tk.id} task={tk}/>
      ))}
    </div>
  );
}

export default TaskList;
