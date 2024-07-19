import { useState } from "react";
import { TaskCard } from "./TaskCard";

export const TaskList = (props) => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: "Learn React from Lecture", completed: true },
    { id: 8751, name: "Write React from Lecture", completed: false },
    { id: 5551, name: "Watch  Lecture", completed: false },
  ]);

  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  return (
    <>
      <h1 className="just">
        Task List {props.title} {props.subtitle}
      </h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      
      <div className="container mt-4">
      <div className="alert alert-success">
        <p className="alert-heading">Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eius.</p>
      </div>

      <div className="alert alert-warning">
        <p className="alert-heading">Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eius.</p>
      </div>
    </div>
   
    </>
  );
};
