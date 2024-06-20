//rfce es el comando para crear componente simplificando
import { useContext, useRef, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //no deja que se comporte como su default el submit... si no entendí mal, para que no refresque la pagina al enviar.
    createTask({
      title,
      description,
    }); //Utiliza la función recibida, contenida en app, para agregar una nueva tarea.
    //limpio el formulario:
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Tareas</h1>
      <input id="InputFocus"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <br />
      <textarea
        placeholder="Descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <br />
      <button className="bg-cyan-600 hover:bg-sky-400 p-2 rounded-md">Guardar</button>
    </form>
  );
}

export default TaskForm;
