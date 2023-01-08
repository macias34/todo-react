import { createContext, useState } from "react";

const todos = [
  {
    id: 1,
    content: "Szachy",
  },
  {
    id: 2,
    content: "Książka",
  },
  {
    id: 3,
    content: "Umyć zęby",
  },
  {
    id: 4,
    content: "Trening",
  },
];

const TasksContext = createContext();

const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(todos);

  const removeTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    // console.log(filteredTasks);
    setTasks(filteredTasks);
  };

  return (
    <TasksContext.Provider value={{ tasks, removeTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };
