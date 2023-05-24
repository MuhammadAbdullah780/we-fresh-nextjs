type IconProps = {
  height?: string
  width?: string
  className ?: string
  logoColor ?: string
}

export const AppleIconSvg = ({ height, width }: IconProps) => {
  return (
    <svg
      width={width || "45"}
      height={height || "45"}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="45" height="45" rx="7.5" fill="black" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.3126 17.5634C33.0777 17.7022 30.5093 19.2204 30.5379 22.3037C30.5732 26.0298 33.872 27.3027 33.9967 27.3508C33.9984 27.3514 33.9995 27.3519 34 27.3521C33.999 27.3552 33.9974 27.3603 33.9952 27.3673C33.934 27.5604 33.4138 29.2047 32.2153 30.9017C31.1393 32.4209 30.0243 33.9354 28.2672 33.9684C27.4233 33.983 26.8589 33.7466 26.2724 33.5009C25.6582 33.2436 25.0197 32.9761 24.0103 32.9761C22.9533 32.9761 22.2852 33.2513 21.6414 33.5167C21.0834 33.7466 20.5435 33.9691 19.7843 33.9983C18.0874 34.0612 16.7968 32.3548 15.7126 30.8403C13.4989 27.7421 11.8052 22.0851 14.0791 18.2682C15.2071 16.3715 17.2243 15.1715 19.4153 15.1401C20.3592 15.1222 21.2739 15.4731 22.0744 15.7803C22.6855 16.0147 23.2301 16.2237 23.6706 16.2237C24.0658 16.2237 24.5959 16.0215 25.214 15.7858C26.1874 15.4146 27.3792 14.9601 28.6069 15.0803C29.4489 15.1149 31.809 15.409 33.3255 17.5557C33.3226 17.5575 33.3183 17.56 33.3126 17.5634ZM28.7221 9C28.8903 10.5386 28.2796 12.0822 27.3751 13.1924C26.4704 14.3009 24.9862 15.1646 23.5329 15.0505C23.3338 13.5432 24.0686 11.9715 24.9062 10.9903C25.8418 9.8802 27.419 9.053 28.7221 9Z"
        fill="white"
      />
    </svg>
  );
};


export const ThreeBars = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 15 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="15" height="2" rx="1" fill="white" />
      <rect y="5" width="15" height="2" rx="1" fill="white" />
      <rect y="10" width="15" height="2" rx="1" fill="white" />
    </svg>
  );
};

export const CloseIcon = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.84326"
        y="0.939331"
        width="18"
        height="2"
        rx="1"
        transform="rotate(45 1.84326 0.939331)"
        fill="white"
      />
      <rect
        x="14.5713"
        y="2.35358"
        width="18"
        height="2"
        rx="1"
        transform="rotate(135 14.5713 2.35358)"
        fill="white"
      />
    </svg>
  );
};

export const CloseIconBlack = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.84326"
        y="0.939331"
        width="18"
        height="2"
        rx="1"
        transform="rotate(45 1.84326 0.939331)"
        fill="black"
      />
      <rect
        x="14.5713"
        y="2.35358"
        width="18"
        height="2"
        rx="1"
        transform="rotate(135 14.5713 2.35358)"
        fill="black"
      />
    </svg>
  );
};