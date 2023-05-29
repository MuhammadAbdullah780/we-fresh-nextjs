import { ButtonStyled } from "./styled";

type ButtonProps = {
  children: React.ReactNode;
  height?: string;
  className?: string;
  backgroundcolor: string;
  onClickFunc?: () => void;
};

const Button = ({
  children,
  height,
  className,
  backgroundcolor,
  onClickFunc,
}: ButtonProps) => {
  return (
    <ButtonStyled
      height={height}
      backgroundcolor={backgroundcolor}
      className={className}
      onClick={onClickFunc}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
