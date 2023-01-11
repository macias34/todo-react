import Button from "../Button/Button";
import { TaskWrapper, Buttons, TaskText, TextArea } from "./Task.styles";
import { TasksContext } from "../../context/TasksContext";
import { useContext, useRef, useState } from "react";
import { isEmpty } from "../../helpers/formValidation";
import TextareaAutosize from "react-textarea-autosize";

const Task = ({ children, id }) => {
  const { removeTask, editTask } = useContext(TasksContext);
  const [editMode, setEditMode] = useState(false);
  const editTextArea = useRef(null);

  const toggleEditMode = () => {
    setEditMode((currentEditMode) => !currentEditMode);

    if (editMode) {
      const content = editTextArea.current.value;
      if (isEmpty(content)) return;

      const editedTask = {
        id,
        content,
      };
      editTask(editedTask);
    }
  };

  return (
    <TaskWrapper>
      {editMode ? (
        <TextareaAutosize
          autoFocus
          defaultValue={children}
          ref={editTextArea}
          onBlur={toggleEditMode}
          spellCheck="false"
        ></TextareaAutosize>
      ) : (
        <TaskText onClick={toggleEditMode}>{children}</TaskText>
      )}

      <Buttons>
        <Button color={"#ee6c4d"} onClick={() => removeTask(id)}>
          <i className="fa-solid fa-trash"></i>
        </Button>
      </Buttons>
    </TaskWrapper>
  );
};

export default Task;
