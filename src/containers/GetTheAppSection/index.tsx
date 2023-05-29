import { Document } from "@contentful/rich-text-types";
import Link from "next/link";
// Components
import RichTextRenderer from "../../common/components/RichTextRenderer/index";
import SectionHeadings from "../../common/components/SectionHeadings";
import SectionWrapper from "../../common/components/SectionWrapper";
import SvgWrapper from "../../common/components/SvgWrapper";
import {
  AppSectionDescriptionWrapper,
  AppSectionLinksWrapper,
  AppSectionWrapper,
} from "./styled";
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
    <SectionWrapper
      backgroundColor="#F2F9FF"
      paddingTop={{ sm: 96, md: 103, lg: 103, xl: 103, "2xl": 103 }}
      paddingBottom={{ sm: 83, md: 103, lg: 103, xl: 103, "2xl": 103 }}
      maxWidth="100vw">
      <AppSectionWrapper>
        {/* DESCRIPTION */}
        <AppSectionDescriptionWrapper>
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
        </AppSectionDescriptionWrapper>
        {/* LINKS */}
        <AppSectionLinksWrapper>
          {data.getTheAppLinksCollection.items?.map((item, i) => (
            <Link href={item.link} key={i}>
              <SvgWrapper
                src={item.image.url}
                alt={item.image.title}
                className="h-[55px] relative w-[165px] md:w-[186px]"
              />
            </Link>
          ))}
        </AppSectionLinksWrapper>
      </AppSectionWrapper>
    </SectionWrapper>
  );
};

export default index;
