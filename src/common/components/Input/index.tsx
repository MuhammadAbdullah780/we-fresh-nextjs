import { useMediaQuery } from "../../../utils/UseMediaQuery";
import { InputStyled } from "./styled";

type InputProps = {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  height?: string;
  state: string | number | undefined;
  width?: string;
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type,
  placeholder,
  state,
  onChangeFunc,
  height,
}: InputProps) => {
  const isLg = useMediaQuery("(max-width: 1024px)");
  const splittedArr = placeholder.split(" ");
  return (
    <InputStyled
      type={type}
      height={height}
      placeholder={
        type === "number"
          ? isLg
            ? `${splittedArr[1] + " " + splittedArr[2]}`
            : placeholder
          : placeholder
      }
      value={state}
      onChange={onChangeFunc}
    />
  );
};

export default Input;
