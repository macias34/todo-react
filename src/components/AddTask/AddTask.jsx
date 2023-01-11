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

  const handleEnterSubmit = (event) => {
    if (event.key === "Enter") {
      addToTasks();
    }
  };

  return (
    <AddTaskWrapper>
      <Input
        ref={inputEl}
        placeholder="Type task to add"
        type="text"
        onKeyDown={handleEnterSubmit}
      ></Input>
    </AddTaskWrapper>
  );
};

export default AddTask;
