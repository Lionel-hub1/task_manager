import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const Layout = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Task 1",
      completed: false,
      priority: "low",
      date: "2022-12-12",
      time: "12:00",
      description: "Description 1",
    },
    {
      id: 2,
      text: "Task 2",
      completed: false,
      priority: "medium",
      date: "2022-12-13",
      time: "13:00",
      description: "Description 2",
    },
    {
      id: 3,
      text: "Task 3",
      completed: false,
      priority: "high",
      date: "2022-12-14",
      time: "14:00",
      description: "Description 3",
    },
    {
      id: 4,
      text: "Task 4",
      completed: true,
      priority: "low",
      date: "2022-12-15",
      time: "15:00",
      description: "Description 4",
    },
    {
      id: 5,
      text: "Task 5",
      completed: false,
      priority: "medium",
      date: "2022-12-16",
      time: "16:00",
      description: "Description 5",
    },
    {
      id: 6,
      text: "Task 6",
      completed: false,
      priority: "high",
      date: "2022-12-17",
      time: "17:00",
      description: "Description 6",
    },
  ]);

  const addTask = () => {
    const newTask = {
      id: tasks.length + 1,
      text: `Task ${tasks.length + 1}`,
      completed: false,
      priority: "low",
      date: "2022-12-12",
      time: "12:00",
      description: `Description ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTask]);
  };

  const filterTasks = () => {
    const filteredTasks = tasks.filter((task) => task.completed === false);
    setTasks(filteredTasks);
  };

  return (
    <div>
      <Navbar addTask={() => addTask()} filterTasks={() => filterTasks()} />
      <Home filteredTasks={tasks} />
    </div>
  );
};

export default Layout;
