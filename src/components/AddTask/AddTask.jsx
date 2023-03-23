import { AddTaskWrapper, Input } from "./AddTask.styles";
import Button from "../Button/Button";
import { useRef, useContext, useCallback } from "react";
import { TasksContext } from "../../context/TasksContext";
import { isEmpty } from "../../helpers/formValidation";

const AddTask = () => {
  const inputEl = useRef(null);
  const { addTask } = useContext(TasksContext);

  const handleEnterSubmit = useCallback((event) => {
    if (event.key === "Enter") {
      const task = {
        id: Math.random(),
        content: inputEl.current.value,
      };

      if (isEmpty(inputEl.current.value)) return;

      addTask(task);
      inputEl.current.value = "";
    }
  }, []);

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
