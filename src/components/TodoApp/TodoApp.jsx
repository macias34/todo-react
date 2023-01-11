import { Wrapper, H1 } from "./TodoApp.styles";
import Tasks from "../Tasks/Tasks";
import { TasksContextProvider } from "../../context/TasksContext";
import AddTask from "../AddTask/AddTask";
import ReadMe from "../Readme/Readme";

const TodoApp = () => {
  return (
    <TasksContextProvider>
      <ReadMe></ReadMe>
      <H1>Todo App</H1>
      <Wrapper>
        <AddTask></AddTask>
        <Tasks></Tasks>
      </Wrapper>
    </TasksContextProvider>
  );
};

export default TodoApp;
