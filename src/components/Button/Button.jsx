import { ButtonWrapper } from "./Button.styles";

const Button = ({ children, color, onClick }) => {
  return (
    <ButtonWrapper style={{ backgroundColor: color }} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
};

export default Button;
