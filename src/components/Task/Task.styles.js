import styled from "styled-components";

export const TaskWrapper = styled.div`
  background-color: #408cbf;
  padding: 1.5vh 1.5vw;

  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  textarea {
    width: 90%;
    word-break: break-all;
    resize: none;
    color: yellow;
    border: none;
    outline: 0px;
    background-color: transparent;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const TaskText = styled.span`
  display: inline-flex;
  align-items: center;
  width: 90%;
  word-break: break-all;
  height: calc(auto);
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5vw;
`;

export const TextArea = styled.textarea`
  width: 65%;
  word-break: break-all;
  resize: none;
  overflow: auto;
  scrollbar-width: none;
  :-webkit-scrollbar {
    display: none;
    width: 0 !important;
  }
  border: none;
  outline: 0px;
  background-color: transparent;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
