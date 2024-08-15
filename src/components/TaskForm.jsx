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
    <header className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-700 p-10 mb-4 rounded-lg">
      <h1 className="text-2xl font-semibold mb-3 text-white">Tareas</h1>
      <input id="InputFocus"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-2 w-full mb-3"
        autoFocus
      />
      <br />
      <textarea
        placeholder="Descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-3"
      />
      <br />
      <button className="bg-cyan-600 hover:bg-sky-400 px-7 py-2 p-2 rounded-md text-white font-medium">Guardar</button>
    </form>
    </header>
  );
}

export default TaskForm;
