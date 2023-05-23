import Link from "next/link";
// Components
import { ImageType, LinkType, RichText } from "../../../../Types";
import FlexCenter from "../../FlexCenter";
import FlexColumn from "../../FlexColumn";
import FieldDescription from "../../FooterFieldDescription";
import Image from "next/image";
// Types
export type FooterProps = {
  footerLogo: ImageType;
  footerLinksCollection: {
    items: LinkType[];
  };
  footerFooterDescriptionsCollection: {
    items: {
      title: RichText;
      descriptionLinksCollection: {
        items: {
          name: string;
          url: string;
        }[];
      };
    }[];
  };
};

type Props = {
  footer: FooterProps;
};

const index = ({ footer }: Props) => {
  const data = [
    {
      title: "SERVICE AREA",
      links: [
        {
          title: "Lorem ipsum dol",
          url: "#",
        },
        {
          title: "Psum dolor",
          url: "#",
        },
        {
          title: "Sum dolor",
          url: "#",
        },
        {
          title: "Lorem ipsum",
          url: "#",
        },
      ],
    },
    {
      title: "ABOUT",
      links: [
        {
          title: "Story of WeFresh",
          url: "#",
        },
        {
          title: "Read our blog",
          url: "#",
        },
        {
          title: "Sign up to deliver",
          url: "#",
        },
      ],
    },
    {
      title: "HELP",
      links: [
        {
          title: "Help center",
          url: "#",
        },
        {
          title: "Read FAQs",
          url: "#",
        },
        {
          title: "Community",
          url: "#",
        },
        {
          title: "Security",
          url: "#",
        },
      ],
    },
  ];
  return (
    <footer className="flex items-center justify-center flex-col gap-7 pt-16 pb-2 px-4 sm:px-5 lg:px-10 bg-bg-blue">
      {/* MAIN FOOTER */}
      <FlexColumn className="w-full !items-start h-max">
        <FlexCenter className="py-5 !items-start md:py-5 gap-3 w-full !flex-col md:!flex-row">
          {/* LOGO */}
          <Link href="/">
            <Image
              src={footer.footerLogo.url}
              alt={footer.footerLogo.title}
              width={108}
              height={40}
            />
          </Link>
          {/* MAPPING THE DESCRIPTIONS */}
          <FlexCenter className="gap-4 flex-2 md:flex-row !items-start flex-col md:px-3">
            {footer.footerFooterDescriptionsCollection.items.map((item, i) => {
              return (
                <FieldDescription
                  key={i}
                  title={item.title}
                  links={item.descriptionLinksCollection.items}
                />
              );
            })}
          </FlexCenter>
          {/* AVAILABLE ON ICONS */}
          <FlexColumn className="gap-3 w-full md:!w-fit md:!justify-start">
            <h6 className="w-full text-center md:w-max">Available on</h6>
            {/* ICONS */}
            <FlexCenter className="gap-3">
              {footer.footerLinksCollection.items.map((item, i) => (
                <Link href={item.link} className="relative w-[45px] h-[45px]">
                  <Image
                    className="w-full h-full"
                    src={item.image.url}
                    fill={true}
                    alt={item.image.title}
                  />
                </Link>
              ))}
            </FlexCenter>
          </FlexColumn>
        </FlexCenter>
        <FlexColumn className="w-full gap-3">
          {/* HR */}
          <hr className="w-[calc(100%+80px)] bg-border h-[2px]" />
          {/* ALL RIGHT RESERVED DIV */}
          <FlexCenter className="w-full md:!w-[730px] md:!justify-start">
            <p className="!max-w-max w-full">
              {`© ${new Date().getFullYear()} WeFresh. All Rights Reserved.`}
            </p>
          </FlexCenter>
        </FlexColumn>
      </FlexColumn>
    </footer>
  );
};

export default index;
