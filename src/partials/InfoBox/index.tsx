import { Document } from "@contentful/rich-text-types";
// Components
import FlexColumn from "../../common/components/FlexColumn";
import RichTextRenderer from "../../common/components/RichTextRenderer";

type infoBoxProps = {
  data: {
    json: Document;
  };
};

const index = ({ data }: infoBoxProps) => {
  return (
    <FlexColumn className="w-[280px] sm:w-[380px] rounded-10 pb-[10px] sm:pb-[20px] !justify-end gap-3 border-border border-2 h-[199px]">
      {/* <h5 className="">{heading}</h5>
      <p className="max-w-[317px] leading-5 text-center w-full">{paragraph}</p> */}
      <RichTextRenderer
        json={data.json}
        paraStyle="max-w-[317px] leading-5 text-center w-full"
      />
    </FlexColumn>
  );
};

export default index;
