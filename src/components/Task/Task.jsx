import Button from "../Button/Button";
import { TaskWrapper, Buttons, TaskText } from "./Task.styles";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";

const Task = ({ children, id }) => {
  const { removeTask } = useContext(TasksContext);

  return (
    <TaskWrapper>
      <TaskText>{children}</TaskText>
      <Buttons>
        <Button color={"#293241"}>
          <i className="fa-regular fa-pen-to-square"></i>
        </Button>
        <Button color={"#ee6c4d"} onClick={() => removeTask(id)}>
          <i className="fa-solid fa-xmark"></i>
        </Button>
      </Buttons>
    </TaskWrapper>
  );
};

export default Task;
