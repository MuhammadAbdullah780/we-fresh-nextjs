import { useRef } from "react";
import { Document } from "@contentful/rich-text-types";
// Components
import RichTextRenderer from "../../common/components/RichTextRenderer";
// Types
type RichText = {
  json: Document;
};

type AccordianProps = {
  paragraph: RichText;
  heading: RichText;
  id: number | string;
  isOpen: number | boolean;
  toggleFunc: (id: number) => void;
};

const index = ({
  paragraph,
  heading,
  toggleFunc,
  id,
  isOpen,
}: AccordianProps) => {
  return (
    <div
      className={`max-w-[780px] flex overflow-hidden gap-[12px] transition-all flex-col justify-center  items-center sm:!items-start w-full bg-white`}>
      <div
        className={`w-full p-[20px] md:px-[41px] md:rounded-10 transition-all border-b-2 sm:border-2 border-b-border sm:border-border `}
        onClick={() => toggleFunc(Number(id))}>
        <RichTextRenderer json={heading.json} />
      </div>
      <div id={id.toString()} className="h-[0px] transition-all duration-300">
        <div
          className={`w-full flex items-start md:mt-[12px] pt-[14px] md:rounded-10 md:pt-[20px] pr-[59px] md:pr-[60px] pb-[15px] md:pb-[28px] pl-[20px] md:pl-[41px] justify-center  duration-300 border-b-2 sm:border-2 gap-[14px] md:gap-[12px] md:border-txt-blue border-b-border sm:border-border flex-col overflow-hidden`}>
          <RichTextRenderer
            json={paragraph.json}
            h5Style="text-txt-blue"
            paraStyle="sm:max-w-[679px] transition-all duration-500 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
