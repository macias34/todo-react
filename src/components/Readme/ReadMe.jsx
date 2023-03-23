import { ReadMeWrapper, H1, A, Instructions } from "./ReadMe.style";

const ReadMe = () => {
  return (
    <ReadMeWrapper>
      <H1>Todo App made using React, using Context for managing state.</H1>
      <Instructions>
        <p>To add task, press Enter!</p>
        <p>
          To edit task, click on it and press Enter or click outside the task!
        </p>
        <p>To delete task, click on the trash!</p>
      </Instructions>

      <A href="https://github.com/macias34/">Github</A>
    </ReadMeWrapper>
  );
};

export default ReadMe;
