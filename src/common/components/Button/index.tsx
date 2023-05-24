import { ButtonStyled } from "./styled";

type ButtonProps = {
  children: React.ReactNode;
  height?: string;
  className?: string;
  backgroundColor: string;
  onClickFunc?: () => void;
};

const Button = ({
  children,
  height,
  className,
  backgroundColor,
  onClickFunc,
}: ButtonProps) => {
  return (
    <ButtonStyled
      height={height}
      backgroundColor={backgroundColor}
      className={className}
      onClick={onClickFunc}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
