import { Wrapper, H1 } from "./TodoApp.styles";
import Tasks from "../Tasks/Tasks";
import { TasksContextProvider } from "../../context/TasksContext";
import AddTask from "../AddTask/AddTask";

const TodoApp = () => {
  return (
    <TasksContextProvider>
      <Wrapper>
        <H1>Todo App</H1>
        <AddTask></AddTask>
        <Tasks></Tasks>
      </Wrapper>
    </TasksContextProvider>
  );
};

export default TodoApp;
