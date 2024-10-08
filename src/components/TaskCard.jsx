import swal from "sweetalert";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
  //   console.log(task.title);

  const { deleteTask } = useContext(TaskContext);
  

  function mostrarAlerta() {
    swal("Eliminando:   " + task.id);
  }

  return (
    <div className="bg-gray-800 text-white rounded-md border-4 border-green-600 border-double p-2">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-300 text-lg">{task.description}</p>
      <button className="bg-green-900 px-2 py-1 rounded-md mt-4 hover:bg-green-700" onClick={() => deleteTask(task.id)}>Eliminar Tarea</button>
    </div>
  );
}

export default TaskCard;
