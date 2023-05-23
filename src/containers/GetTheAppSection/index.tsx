import { Document } from "@contentful/rich-text-types";
import Link from "next/link";
// Components
import FlexCenter from "../../common/components/FlexCenter";
import FlexColumn from "../../common/components/FlexColumn";
import RichTextRenderer from "../../common/components/RichTextRenderer/index";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";
// Types Imports
import { LinkType, RichText } from "../../Types";
// Types
type Props = {
  data: {
    getTheAppDescription: RichText;
    getTheAppTitle: RichText;
    getTheAppLinksCollection: {
      items: LinkType[];
    };
  };
};

const index = ({ data }: Props) => {
  return (
    <SectionWrapper className="bg-bg-blue pt-[96px] !max-w-full pb-[83px] md:py-[103px]">
      <FlexColumn className="gap-4">
        {/* DESCRIPTION */}
        <FlexColumn className="w-full m-5 px-3 sm:px-0 gap-2">
          {/* Title */}
          <SectionHeadings className="section-heading">
            <RichTextRenderer
              json={data.getTheAppTitle.json}
              paraStyle="hidden"
            />
          </SectionHeadings>
          {/* Description */}
          <RichTextRenderer
            paraStyle="w-full md:w-[540px] text-center"
            json={data.getTheAppDescription.json}
          />
        </FlexColumn>
        {/* LINKS */}
        <FlexCenter className="gap-3 !flex-col md:!flex-row ">
          {data.getTheAppLinksCollection.items?.map((item, i) => (
            <Link href={item.link} key={i}>
              <SvgWrapper
                src={item.image.url}
                alt={item.image.title}
                className="h-[55px] relative w-[165px] md:w-[186px]"
              />
            </Link>
          ))}
        </FlexCenter>
      </FlexColumn>
    </SectionWrapper>
  );
};

export default index;
