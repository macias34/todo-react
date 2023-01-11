import { createContext, useState, useMemo } from "react";

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

  const addTask = (task) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };

  const removeTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const editTask = (editedTask) => {
    const taskToEdit = tasks.find((task) => task.id === editedTask.id);
    taskToEdit.content = editedTask.content;

    const filteredTasks = tasks.map((task) =>
      task.id === editedTask.id ? (task = taskToEdit) : task
    );

    setTasks(filteredTasks);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, editTask }}>
      {children}
    </TasksContext.Provider>
  );
};

export { TasksContext, TasksContextProvider };
