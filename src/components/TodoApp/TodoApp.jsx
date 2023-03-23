import { Wrapper, H1 } from "./TodoApp.styles";
import Tasks from "../Tasks/Tasks";
import { TasksContextProvider } from "../../context/TasksContext";
import AddTask from "../AddTask/AddTask";
import ReadMe from "../Readme/ReadMe";

const TodoApp = () => {
  return (
    <TasksContextProvider>
      <ReadMe />
      <H1>Todo App</H1>
      <Wrapper>
        <AddTask />
        <Tasks />
      </Wrapper>
    </TasksContextProvider>
  );
};

export default TodoApp;
