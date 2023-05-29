// Components
import Link from "next/link";
import ActionButton from "../Button";
import FlexColumn from "../FlexColumn";
// Type Imports
import { HeaderLinks } from "../Layout/Header";
import {
  Divider,
  NavbarSmallWrapper,
  NavbarLinksWrapper,
  TopWrapper,
} from "./styled";

type NavbarSmallProps = {
  links: HeaderLinks[];
  isShown: boolean;
};

const index = ({ isShown, links }: NavbarSmallProps) => {
  return (
    <NavbarSmallWrapper isShown={isShown}>
      <TopWrapper isShown={isShown}>
        <Divider />
        {links.map((link, i) => {
          return (
            <NavbarLinksWrapper key={i}>
              <Link className="link-small navlink" href={link.url}>
                {link.name}
              </Link>
              {/* DIVIDER */}
              <Divider />
            </NavbarLinksWrapper>
          );
        })}
      </TopWrapper>
      <ActionButton
        backgroundcolor="#FFD476"
        className={isShown ? "opacity-100 !w-full" : "opacity-0 !w-full"}>
        Sign up
      </ActionButton>
    </NavbarSmallWrapper>
  );
};

export default index;
