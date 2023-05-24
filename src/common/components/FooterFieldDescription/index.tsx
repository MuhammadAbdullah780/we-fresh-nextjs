import Link from "next/link";
// Components
import RichTextRenderer from "../RichTextRenderer";
// Styled Imports
import { FieldDescriptionWrapper, LinksWrapper } from "./styled";
// Type Imports
import { RichText } from "../../../Types";

type Link = {
  name: string;
  url: string;
};

type FieldDescriptionProps = {
  title: RichText;
  links: Link[];
};

const FooterFieldDescription = ({ title, links }: FieldDescriptionProps) => {
  return (
    <FieldDescriptionWrapper>
      <RichTextRenderer json={title.json} paraStyle="hidden" h6Style="w-full" />
      <LinksWrapper>
        {links.map((link, i) => {
          return (
            <Link key={i} href={link.url}>
              <li>{link.name}</li>
            </Link>
          );
        })}
      </LinksWrapper>
    </FieldDescriptionWrapper>
  );
};

export default FooterFieldDescription;
