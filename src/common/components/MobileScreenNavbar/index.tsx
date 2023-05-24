// Components
import Link from "next/link";
import ActionButton from "../Button";
import FlexColumn from "../FlexColumn";
// Type Imports
import { HeaderLinks } from "../Layout/Header";
import { Divider, NavbarSmallWrapper, NavbarLinksWrapper } from "./styled";

type NavbarSmallProps = {
  links: HeaderLinks[];
  isShown: boolean;
};

const index = ({ isShown, links }: NavbarSmallProps) => {
  return (
    <NavbarSmallWrapper isShown={isShown}>
      <div
        className={` ${
          isShown ? "opacity-100" : "opacity-0"
        } transition-opacity delay-150 w-full`}>
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
      </div>
      <ActionButton
        backgroundColor="#FFD476"
        className={` ${
          isShown ? "opacity-100" : "opacity-0"
        } transition-opacity delay-300 !w-full`}>
        Sign up
      </ActionButton>
    </NavbarSmallWrapper>
  );
};

export default index;
