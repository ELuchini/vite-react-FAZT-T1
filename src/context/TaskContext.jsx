import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks"; //con llaves porque no es un export default

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); //es "lo mismo que" 777 const tasks = [] 777

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    let correctId = tasks.length;

    while (tasks.some((objeto) => objeto.id === correctId)) {
      //Hago esto justo con la variable correctId, para evitar que se duplique un valor de key, cosa que a veces sucede.
      correctId -= 1; //originalmente era +=1, pero esto hacía que cada vez que ocurría, seguía ocurriendo en todas las instancias siguientes, de esta forma, elimino cuando ocurreo con un valor negativo porsiblemente, y luego no ocurriría más.
      //console.log("Acá ocurríría");
    }

    setTasks([
      ...tasks,
      {
        title: task.title,
        id: correctId,
        description: task.description,
      },
    ]);
  }

  function deleteTask(idTask) {
    setTasks(tasks.filter((task) => task.id !== idTask));
  }

  return (
    <TaskContext.Provider value={{ tasks, deleteTask, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}
