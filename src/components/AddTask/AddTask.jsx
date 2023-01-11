import { AddTaskWrapper, Input } from "./AddTask.styles";
import Button from "../Button/Button";
import { useRef } from "react";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";
import { isEmpty } from "../../helpers/formValidation";

const AddTask = () => {
  const inputEl = useRef(null);
  const { addTask } = useContext(TasksContext);
  const addToTasks = () => {
    const task = {
      id: Math.random(),
      content: inputEl.current.value,
    };

    if (isEmpty(inputEl.current.value)) return;

    addTask(task);
    inputEl.current.value = "";
  };
  return (
    <AddTaskWrapper>
      <Input ref={inputEl} type="text"></Input>
      <Button onClick={addToTasks} color={"#38E54D"}>
        +
      </Button>
    </AddTaskWrapper>
  );
};

export default AddTask;
