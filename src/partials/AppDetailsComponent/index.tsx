import FlexColumn from "../../common/components/FlexColumn";
import { AppDetailsWrapper, AbsoluteDiv } from "./styled";

type AppDetailsComponentProps = {
  children: React.ReactNode;
};

const index: React.FC<AppDetailsComponentProps> = ({ children }) => {
  return (
    <AppDetailsWrapper className="group p-4">
      <div>{children}</div>
      <AbsoluteDiv />
    </AppDetailsWrapper>
  );
};

export default index;
