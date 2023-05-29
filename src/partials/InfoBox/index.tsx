import { Document } from "@contentful/rich-text-types";
// Components
import RichTextRenderer from "../../common/components/RichTextRenderer";
import { InfoBoxContainer } from "./styled";

type infoBoxProps = {
  data: {
    json: Document;
  };
};

const index = ({ data }: infoBoxProps) => {
  return (
    <InfoBoxContainer>
      <RichTextRenderer
        json={data.json}
        paraStyle="max-w-[317px] leading-5 text-center w-full"
      />
    </InfoBoxContainer>
  );
};

export default index;
