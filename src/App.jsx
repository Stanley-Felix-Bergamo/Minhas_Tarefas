import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Task/Tasks";
import AddTask from "./components/Task/addTask";

const App = () => {
  const [tasks, setTesks] = useState([

    {
      id: '1',
      title: 'Estudar Redux',
      completed: false,
    },
    {
      id: '2',
      title: 'Estudar React',
      completed: true,
    },
    {
      id: '3',
      title: 'Estudar Javascript',
      completed: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  );
};

export default App;
