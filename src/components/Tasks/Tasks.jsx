import { useContext } from "react";
import { TasksWrapper } from "./Tasks.styles";
import Task from "../Task/Task";
import { TasksContext } from "../../context/TasksContext";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);
  const returnTasks = () => {
    return tasks.map((task) => (
      <Task id={task.id} key={task.id}>
        {task.content}
      </Task>
    ));
  };

  return (
    <TasksWrapper>{tasks ? returnTasks() : <h1>No tasks.</h1>}</TasksWrapper>
  );
};

export default Tasks;
