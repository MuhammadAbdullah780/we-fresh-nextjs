import Image from "next/image";
import Link from "next/link";
// Components
import { ImageType, LinkType, RichText } from "../../../../Types";
import FlexCenter from "../../FlexCenter";
import FieldDescription from "../../FooterFieldDescription";
// Styled
import {
  AvailableOnHeading,
  CenterDescriptonsWrapper,
  FooterStyled,
  FooterWrapper,
  HR,
  ParagraphWrapper,
  SocialIconsWrapper,
  WrapperBottom,
  WrapperTop,
} from "./styled";
import { FlexCenterStyled } from "../../../GlobalStyles/styled";
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

const Footer = ({ footer }: Props) => {
  return (
    <FooterStyled as="footer">
      {/* MAIN FOOTER */}
      <FooterWrapper>
        <WrapperTop>
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
          <CenterDescriptonsWrapper className="flex-2">
            {footer.footerFooterDescriptionsCollection.items.map((item, i) => {
              return (
                <FieldDescription
                  key={i}
                  title={item.title}
                  links={item.descriptionLinksCollection.items}
                />
              );
            })}
          </CenterDescriptonsWrapper>
          {/* AVAILABLE ON ICONS */}
          <SocialIconsWrapper>
            <AvailableOnHeading>Available on</AvailableOnHeading>
            {/* ICONS */}
            <FlexCenterStyled className="gap-3">
              {footer.footerLinksCollection.items.map((item, i) => (
                <Link href={item.link} key={i} className="social-icon-link">
                  <Image
                    className="w-full h-full"
                    src={item.image.url}
                    fill={true}
                    alt={item.image.title}
                  />
                </Link>
              ))}
            </FlexCenterStyled>
          </SocialIconsWrapper>
        </WrapperTop>
        <WrapperBottom>
          {/* HR */}
          <HR />
          {/* ALL RIGHT RESERVED DIV */}
          <ParagraphWrapper>
            <p className="footer-para">
              {`© ${new Date().getFullYear()} WeFresh. All Rights Reserved.`}
            </p>
          </ParagraphWrapper>
        </WrapperBottom>
      </FooterWrapper>
    </FooterStyled>
  );
};

export default Footer;
