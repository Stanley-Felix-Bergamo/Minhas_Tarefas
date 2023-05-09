import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route } from "react-router-dom";
import axios from "axios";

import Tasks from "./components/Task/Tasks";
import AddTask from "./components/Task/addTask";
import Header from "./components/Header/Header";
import TaskDetails from "./components/Task/TaskDetails";

import "./App.css";

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

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios
        .get('https://jsonplaceholder.cypress.io/todos?_limit=10');
      setTimeout(() => {
        setTesks(data);
      }, 5000)
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }
      return task
    });
    setTesks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTesks(newTasks);
  }


  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        id: uuidv4(),
        title: taskTitle,
        completed: false,
      },
    ];
    setTesks(newTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route
          path='/'
          exact
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks
                tasks={tasks}
                handleTaskClick={handleTaskClick}
                handleTaskDeletion={handleTaskDeletion} />
            </>
          )} />
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </BrowserRouter >
  );
};

export default App;
