import { useState } from "react";
import { TaskCard } from "./TaskCard";
import { BoxCard } from "./BoxCard";

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

      <BoxCard result="alert alert-success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, eius.
        </p>
      </BoxCard>


      <BoxCard result="alert alert-warning">
        <p className="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt,
          adipisci provident e, ipsa eaque!
        </p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam!</p>
      </BoxCard>


      <BoxCard result="alert alert-info">
        <p className="title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt,
          adipiimus, ipsa eaque!
        </p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, quam!</p>
      </BoxCard>

        
    </>
  );
};
