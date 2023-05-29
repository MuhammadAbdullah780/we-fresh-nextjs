import { useMediaQuery } from "../../../utils/UseMediaQuery";
import { InputStyled } from "./styled";

type InputProps = {
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  height?: number;
  state: string | number | undefined;
  onChangeFunc: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  state,
  onChangeFunc,
  height,
}) => {
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
