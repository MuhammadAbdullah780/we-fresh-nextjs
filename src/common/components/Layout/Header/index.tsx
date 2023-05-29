import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
// Components
import { CloseIcon, ThreeBars } from "../../Icons";
import NavbarSmall from "../../MobileScreenNavbar";
import SectionWrapper from "../../SectionWrapper";
// Hooks
import { useMediaQuery } from "../../../../utils/UseMediaQuery";
// Type Imports
import { ImageType } from "../../../../Types";
import { Header, NavBar, NavLinks, ToggleButtonWrapper } from "./styled";
// Types
export type HeaderProps = {
  logo: ImageType;
  headerLinksCollection: {
    items: HeaderLinks[];
  };
};

export type HeaderLinks = {
  url: string;
  name: string;
};

export type Props = {
  header: HeaderProps;
};

const index = ({ header }: Props) => {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (!isShown) {
      document
        .querySelector<HTMLBodyElement>("body")!
        .classList.remove("overflow-hidden");
    } else {
      document
        .querySelector<HTMLBodyElement>("body")!
        .classList.add("overflow-hidden");
    }
  }, [isShown]);

  useEffect(() => {
    const checkWidth = () => {
      if (!isTablet) {
        setIsShown(false);
      } else {
        null;
      }
    };
    checkWidth();
  }, [isTablet]);

  const screensPadding = {
    sm: 0,
    md: 0,
    lg: 0,
    xl: 0,
    ["2xl"]: 0,
  };

  return (
    <Header>
      <SectionWrapper
        zIndex={30}
        paddingTop={screensPadding}
        paddingBottom={screensPadding}
        paddingLeft={screensPadding}
        paddingRight={screensPadding}>
        <NavBar>
          {/* LOGO */}
          <Link href="/">
            <Image
              src={header.logo.url}
              alt={header.logo.title}
              width={108}
              height={40}
            />
          </Link>
          {/* LINKS  */}
          <NavLinks>
            {header.headerLinksCollection.items.map((item, i) => {
              return (
                <Link href={item.url} key={i} className="link">
                  <li className="navlink">{item.name}</li>
                </Link>
              );
            })}
          </NavLinks>
          {/* TOGGLE BUTTON */}
          {isShown ? (
            <ToggleButtonWrapper onClick={() => setIsShown(false)}>
              <CloseIcon />
            </ToggleButtonWrapper>
          ) : (
            <ToggleButtonWrapper onClick={() => setIsShown(true)}>
              <ThreeBars />
            </ToggleButtonWrapper>
          )}
        </NavBar>
      </SectionWrapper>
      <NavbarSmall
        links={header.headerLinksCollection.items}
        isShown={isShown}
      />
    </Header>
  );
};

export default index;
