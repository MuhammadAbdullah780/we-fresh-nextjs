import Link from "next/link";
import React, { useEffect, useState } from "react";
// Components
import { CloseIcon, ThreeBars, WeFreshLogoSvg } from "../../Icons";
import NavbarSmall from "../../MobileScreenNavbar";
import SectionWrapper from "../../SectionWrapper";
// Hooks
import { useMediaQuery } from "../../../../utils/UseMediaQuery";
import { ImageType } from "../../../../Types";
import Image from "next/image";
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
  const links = [
    {
      title: "Our App",
      url: "#",
    },
    {
      title: "For Business",
      url: "#",
    },
    {
      title: "About us",
      url: "#",
    },
    {
      title: "English",
      url: "#",
    },
  ];

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

  return (
    <>
      <header className="absolute w-full top-0 left-0  pt-[15px]">
        <SectionWrapper zIndex="30" className="!p-0">
          <nav className="flex items-center pl-[19px] pr-[20px] z-30 md:pl-0 md:pr-0 justify-between md:justify-around">
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
            <ul className="md:flex gap-8 hidden">
              {header.headerLinksCollection.items.map((item, i) => {
                return (
                  <Link
                    href={item.url}
                    key={i}
                    className="hover:scale-105 transition-transform duration-300">
                    <li className="navlink">{item.name}</li>
                  </Link>
                );
              })}
            </ul>
            {/* TOGGLE BUTTON */}
            {isShown ? (
              <div
                onClick={() => setIsShown(false)}
                className="w-5 h-5 mr-3 block md:hidden">
                <CloseIcon />
              </div>
            ) : (
              <div
                onClick={() => setIsShown(true)}
                className="w-5 h-5 mr-3 block md:hidden">
                <ThreeBars />
              </div>
            )}
          </nav>
        </SectionWrapper>
        <NavbarSmall
          links={header.headerLinksCollection.items}
          isShown={isShown}
        />
      </header>
    </>
  );
};

export default index;
