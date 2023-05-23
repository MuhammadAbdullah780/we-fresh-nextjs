import Link from "next/link";
// Components
import FlexColumn from "../FlexColumn";
// Type Imports
import { RichText } from "../../../Types";
import RichTextRenderer from "../RichTextRenderer";

type Link = {
  name: string;
  url: string;
};

type FieldDescriptionProps = {
  title: RichText;
  links: Link[];
};

const index = ({ title, links }: FieldDescriptionProps) => {
  return (
    <FlexColumn className="md:p-4 py-5 cursor-pointer md:items-start md:py-0 gap-4">
<<<<<<< HEAD
      <h6 className="w-full">{title}</h6>
=======
      <RichTextRenderer
        json={title.json}
        paraStyle="hidden"
        h6Style="md:max-w-[114px] w-full"
      />
>>>>>>> a3a652702187b81ee8e89a7f3e3fdce77e34205a
      <div className="w-full">
        {links.map((link, i) => {
          return (
            <Link key={i} href={link.url}>
              <li>{link.name}</li>
            </Link>
          );
        })}
      </div>
    </FlexColumn>
  );
};

export default index;
