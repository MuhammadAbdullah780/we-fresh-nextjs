import Container from "../../Container";
import React, { useEffect, useState } from "react";
import SectionWrapper from "../../SectionWrapper";
import FlexColumn from "../../FlexColumn";
import { CloseIcon, ThreeBars } from "../../Icons";
import ActionButton from "../../Button";

const links = ["Our App", "For Business", "About us", "English"];

const index = () => {
  const [isShown, setIsShown] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isShown) {
      document.querySelector("body").classList.remove("overflow-hidden");
    } else {
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }, [isShown]);

  useEffect(() => {
    const checkWidth = () => {
      if (width > 767) {
        setIsShown(false);
      } else {
        null;
      }
    };
    checkWidth();
  }, [width]);

  return (
    <>
      <header className="absolute w-full top-0 left-0  pt-5">
        <SectionWrapper zIndex="30" className="!p-0">
          <nav className="flex items-center z-30 px-5 md:px-0 justify-between md:justify-around">
            {/* LOGO */}
            <svg
              width="107"
              height="40"
              viewBox="0 0 107 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.3691 19.6477V28.1081H44.3242V7.56757H56.2161V11.1876H48.3691V16.0275H54.9479V19.6477H48.3691ZM80.1068 24.432C81.5535 25.115 83.0474 25.4806 84.6829 25.4806C86.0822 25.4806 86.7739 25.0993 86.7739 24.3366C86.7739 23.7328 86.1766 23.2244 84.9974 22.8112C83.2203 22.1598 82.1352 21.6672 81.7105 21.3652C80.5313 20.555 79.9495 19.411 79.9495 17.9173C79.9495 15.216 81.9465 13.3728 85.5475 13.3728C87.057 13.3728 88.6139 13.5474 90.1231 13.913L89.7618 17.3771C88.3152 16.9479 86.9628 16.7573 85.7049 16.7573C84.5724 16.7573 84.0065 17.075 84.0065 17.7264C84.0065 18.2826 84.5882 18.7753 85.7678 19.1885C87.4817 19.8082 88.6139 20.253 89.117 20.6186C90.2965 21.4606 90.894 22.6523 90.894 24.1778C90.894 27.276 88.5826 28.8176 84.62 28.8176C82.6228 28.8176 80.9246 28.4998 79.5564 27.8482L80.1068 24.432ZM96.4293 15.3591H96.3664V7.97785H92.2463V28.4999H96.3664V20.3642C96.3664 18.1077 97.4197 16.9796 99.5267 16.9796C101.225 16.9796 102.074 17.9806 102.074 19.967V28.4999H106.194V18.7434C106.194 15.5178 104.166 13.3728 100.848 13.3728C98.8665 13.3728 97.3884 14.0401 96.4293 15.3591ZM71.1614 17.4723C71.7744 17.0116 72.4035 16.789 73.0642 16.789C74.0075 16.789 74.4792 17.1387 74.4792 17.8219C74.4792 18.2351 74.2593 18.6007 73.8346 18.9022C73.2213 19.3313 72.3093 19.5538 71.004 19.5538C70.5638 19.5538 70.2021 19.5219 69.9034 19.4584C70.0763 18.6321 70.4854 17.965 71.1614 17.4723ZM73.19 25.3376C70.9096 25.3376 69.7148 24.448 69.589 22.6683C70.2021 22.7794 70.7209 22.8113 71.1614 22.8113C73.6144 22.8113 75.5328 22.3027 76.901 21.3014C78.1273 20.3959 78.7407 19.2361 78.7407 17.79C78.7407 16.2647 78.1744 15.1207 77.058 14.3422C76.1303 13.6906 74.951 13.3728 73.4886 13.3728C71.004 13.3728 69.0386 14.2465 67.5919 15.9787C66.2238 17.5516 65.5318 19.5219 65.5318 21.8895C65.5318 23.9235 66.0825 25.5442 67.1673 26.7361C68.441 28.1184 70.4065 28.8174 73.0326 28.8174C74.4354 28.8174 75.8387 28.5617 77.2354 28.0584V24.4293C75.8868 25.0364 74.5384 25.3376 73.19 25.3376ZM62.1459 14.0244C62.8379 13.4523 63.7496 13.1662 64.8817 13.1662C65.1325 13.1662 65.4096 13.1872 65.6975 13.2201V17.393C65.0842 17.2626 64.514 17.2021 64.0171 17.2021C62.0359 17.2021 61.045 18.2826 61.045 20.4596V28.4998H56.9251V19.9034C56.9251 17.8378 56.7049 15.772 56.2489 13.7224H60.3059C60.3972 14.0787 60.4888 14.6212 60.6163 15.3773C60.6424 15.5317 60.6699 15.695 60.6993 15.8674H60.7621C61.2181 15.0092 61.6739 14.3897 62.1459 14.0244Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M23.138 22.8845V23.53C23.138 24.8017 22.7236 25.9541 21.9399 26.8624C21.5355 27.3311 19.9857 28.8407 16.9928 28.5895C15.9581 28.5035 14.6345 28.2733 13.4925 27.266C12.9303 27.7726 12.2624 28.1285 11.4556 28.3528C11.0302 28.4703 10.3064 28.625 9.43478 28.625C8.34143 28.625 7.01483 28.3822 5.75137 27.5197C4.81987 26.8845 4.08479 25.5571 3.92169 24.2169C3.8603 23.7143 3.83124 23.3047 3.82999 22.929C3.82448 20.8918 3.82999 11.7771 3.82999 11.7771V11.626H6.2106C7.22403 11.626 7.22403 12.3695 7.22403 12.727C7.22403 12.804 7.21501 20.426 7.22403 22.3346C7.22629 22.7546 7.26412 23.1923 7.33753 23.6351C7.4167 24.1118 7.63667 24.4569 8.01022 24.69C8.5589 25.0326 9.21732 25.1455 10.0236 25.0346C10.3327 24.9913 10.7311 24.9095 11.0643 24.6541C11.4774 24.3369 11.7089 23.845 11.7718 23.15C11.7896 22.9556 11.7893 22.7386 11.7891 22.5293L11.7898 12.9093C11.7898 12.6288 11.7898 11.8832 12.7429 11.8824C12.7429 11.8827 14.2223 11.8827 14.2569 11.8824C14.4017 11.8852 14.6886 11.8908 14.9268 12.1262C15.1957 12.3928 15.1947 12.748 15.1944 12.8817C15.1924 13.808 15.1914 16.9227 15.1907 19.4065C15.1902 20.9224 15.1899 22.2037 15.1892 22.6095C15.1887 23.0154 15.2135 23.5402 15.4124 23.9986C15.6015 24.4341 15.8887 24.7113 16.3156 24.8716C16.8061 25.0566 17.3152 25.1179 17.8268 25.0543C18.4311 24.9781 18.8768 24.8538 19.2296 24.4703C19.5059 24.1705 19.6685 23.7741 19.7134 23.2918C19.7482 22.9171 19.7662 22.5364 19.7665 22.1594C19.7708 20.3088 19.7665 12.6657 19.7665 12.6657C19.767 12.3814 19.7672 11.6262 20.7158 11.626C20.7158 11.6257 22.221 11.626 22.2721 11.626H22.2731C22.5101 11.6293 22.7379 11.7123 22.8957 11.87C23.1412 12.1143 23.1387 12.4374 23.138 12.544C23.1365 13.3594 23.1377 20.6414 23.138 22.8845ZM25.8741 27.4349C25.4199 27.0338 24.3631 25.8516 24.3631 23.5366C24.3631 21.5986 25.0411 20.5149 25.4049 20.0731C24.8792 19.407 24.3481 18.205 24.3481 16.7009C24.3481 15.003 24.865 13.9407 25.2986 13.3483C26.1452 12.1938 27.4515 11.6326 29.2917 11.6326H36.8843V13.865C36.8843 14.9313 36.0753 14.9313 35.7706 14.9313H29.7888C28.3414 14.9313 28.1217 15.2908 27.9902 15.5057C27.7289 15.9331 27.6439 16.4508 27.7304 17.0898C27.7629 17.3298 27.8243 17.6369 28.0095 17.8832C28.2818 18.2462 28.8124 18.4224 29.6319 18.4224H35.5807C36.4546 18.4224 36.638 18.9743 36.638 19.4376V20.7257C36.6355 20.8655 36.6292 21.1812 36.3774 21.4409C36.0966 21.7313 35.7283 21.729 35.6045 21.728C34.8161 21.726 32.9724 21.727 31.4939 21.7275L29.5583 21.728C29.2241 21.7366 28.8212 21.747 28.4782 21.8992C28.163 22.0389 27.9714 22.2412 27.8556 22.5551C27.7121 22.9432 27.6645 23.3447 27.7141 23.7495C27.7724 24.2204 27.8641 24.5645 28.1397 24.8235C28.4093 25.0766 28.6967 25.205 28.9936 25.205H38.5689C39.0319 23.5154 39.2847 21.7371 39.2847 19.8986C39.2847 8.93662 30.4905 0.050293 19.6422 0.050293C8.79416 0.050293 -0.000244141 8.93662 -0.000244141 19.8986C-0.000244141 30.8604 8.79416 39.7467 19.6422 39.7467C27.4385 39.7467 34.1737 35.1574 37.3463 28.506H28.7874C27.693 28.506 26.6583 28.1255 25.8741 27.4349Z"
                fill="#F6E500"
              />
            </svg>
            {/* LINKS  */}
            <ul className="md:flex gap-8 hidden">
              {links?.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
            {/* TOGGLE BUTTON */}
            {isShown ? (
              <div
                onClick={() => setIsShown(false)}
                className="w-5 h-5 mr-3 block md:hidden"
              >
                <CloseIcon />
              </div>
            ) : (
              <div
                onClick={() => setIsShown(true)}
                className="w-5 h-5 mr-3 block md:hidden"
              >
                <ThreeBars />
              </div>
            )}
          </nav>
        </SectionWrapper>
        <NavbarSmall isShown={isShown} />
      </header>
    </>
  );
};

export default index;

export const NavbarSmall = ({ isShown }) => {
  return (
    <FlexColumn
      className={`px-5 z-20 -translate-y-full transition-transform ${
        isShown && "translate-y-0"
      }  transition-opacity absolute pt-[15vh] !items-start gap-5 !justify-start top-0 right-0 bg-navbar-bg h-screen w-full`}
    >
      <div
        className={` ${
          isShown ? "opacity-100" : "opacity-0"
        } transition-opacity delay-150 w-full`}
      >
        <div className="divide-y h-[1px] mb-4 bg-light-grey w-full" />
        {links.map((link, i) => {
          return (
            <div
              key={i}
              className="flex text-white font-normal items-start flex-col gap-3 mb-5 justify-center"
            >
              <div>{link}</div>
              {/* DIVIDER */}
              <div className="divide-y h-[1px] w-full bg-light-grey " />
            </div>
          );
        })}
      </div>
      <ActionButton
        className={` ${
          isShown ? "opacity-100" : "opacity-0"
        } transition-opacity delay-300 !w-full`}
      >
        Sign up
      </ActionButton>
    </FlexColumn>
  );
};