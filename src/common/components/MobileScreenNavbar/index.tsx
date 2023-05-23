// Components
import Link from "next/link";
import ActionButton from "../Button";
import FlexColumn from "../FlexColumn";
// Type Imports
import { HeaderLinks } from "../Layout/Header";

type NavbarSmallProps = {
  links: HeaderLinks[];
  isShown: boolean;
};

const index = ({ isShown, links }: NavbarSmallProps) => {
  return (
    <FlexColumn
      className={`px-5 z-20 -translate-y-full transition-transform ${
        isShown && "translate-y-0"
      }  transition-opacity absolute pt-[95px] !items-start gap-5 !justify-start top-0 right-0 bg-navbar-bg h-screen w-full`}>
      <div
        className={` ${
          isShown ? "opacity-100" : "opacity-0"
        } transition-opacity delay-150 w-full`}>
        <div className="divide-y h-[1px] mb-4 bg-light-grey w-full" />
        {links.map((link, i) => {
          return (
            <div
              key={i}
              className="flex text-white font-normal items-start flex-col gap-3 mb-5 justify-center">
              <Link
                className="hover:scale-105 navlink transition-transform duration-300"
                href={link.url}>
                {link.name}
              </Link>
              {/* DIVIDER */}
              <div className="divide-y h-[1px] w-full bg-light-grey " />
            </div>
          );
        })}
      </div>
      <ActionButton
        className={` ${
          isShown ? "opacity-100" : "opacity-0"
        } transition-opacity delay-300 !w-full`}>
        Sign up
      </ActionButton>
    </FlexColumn>
  );
};

export default index;
