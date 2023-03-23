import { TaskWrapper, TaskText } from "./Task.styles";
import { TasksContext } from "../../context/TasksContext";
import { useCallback, useContext, useRef, useState, memo } from "react";
import { isEmpty } from "../../helpers/formValidation";
import TextareaAutosize from "react-textarea-autosize";

const Task = ({ children, id }) => {
  const { removeTask, editTask } = useContext(TasksContext);
  const [editMode, setEditMode] = useState(false);
  const editTextArea = useRef(null);

  console.log("Rerender task.");

  const toggleEditMode = () => {
    setEditMode((currentEditMode) => !currentEditMode);
    if (editMode) {
      const content = editTextArea.current.value;
      if (isEmpty(content) || content === children) return;

      const editedTask = {
        id,
        content,
      };
      editTask(editedTask);
    }
  };

  const handleEnterSubmit = useCallback((event) => {
    if (event.key === "Enter") {
      toggleEditMode();
    }
  });

  return (
    <TaskWrapper>
      {editMode ? (
        <TextareaAutosize
          autoFocus
          defaultValue={children}
          ref={editTextArea}
          onBlur={toggleEditMode}
          spellCheck="false"
          onKeyDown={handleEnterSubmit}
        ></TextareaAutosize>
      ) : (
        <TaskText onClick={toggleEditMode}>{children}</TaskText>
      )}
      <i onClick={() => removeTask(id)} className="fa-solid fa-trash"></i>
    </TaskWrapper>
  );
};

export default memo(Task);
