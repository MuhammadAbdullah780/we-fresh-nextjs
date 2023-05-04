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


export const WeFreshLogoSvg = ({ width, height, logoColor } : IconProps ) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 108}
      height={height || 40}
      fill="none"
    >
      <path
        fill={logoColor || "#fff"}
        fillRule="evenodd"
        d="M48.37 19.648v8.46h-4.046V7.568h11.892v3.62H48.37v4.84h6.579v3.62h-6.579Zm31.737 4.784c1.447.683 2.94 1.049 4.576 1.049 1.4 0 2.09-.382 2.09-1.144 0-.604-.596-1.113-1.776-1.526-1.777-.651-2.862-1.144-3.287-1.446-1.179-.81-1.76-1.954-1.76-3.448 0-2.701 1.996-4.544 5.597-4.544 1.51 0 3.067.174 4.576.54l-.361 3.464c-1.447-.43-2.8-.62-4.057-.62-1.133 0-1.698.318-1.698.97 0 .556.581 1.048 1.76 1.462 1.715.62 2.847 1.064 3.35 1.43 1.18.842 1.777 2.033 1.777 3.559 0 3.098-2.311 4.64-6.274 4.64-1.997 0-3.695-.318-5.064-.97l.55-3.416Zm16.322-9.073h-.063V7.978h-4.12V28.5h4.12v-8.136c0-2.256 1.054-3.384 3.16-3.384 1.699 0 2.548 1 2.548 2.987V28.5h4.12v-9.757c0-3.225-2.028-5.37-5.346-5.37-1.981 0-3.46.667-4.419 1.986Zm-25.268 2.113c.613-.46 1.242-.683 1.903-.683.944 0 1.415.35 1.415 1.033 0 .413-.22.779-.644 1.08-.614.43-1.526.652-2.831.652-.44 0-.802-.032-1.1-.096.172-.826.581-1.493 1.257-1.986Zm2.029 7.866c-2.28 0-3.475-.89-3.601-2.67a8.699 8.699 0 0 0 1.572.143c2.453 0 4.372-.508 5.74-1.51 1.226-.905 1.84-2.065 1.84-3.511 0-1.525-.567-2.67-1.683-3.448-.928-.651-2.107-.97-3.57-.97-2.484 0-4.45.874-5.896 2.607-1.368 1.573-2.06 3.543-2.06 5.91 0 2.035.55 3.655 1.635 4.847 1.274 1.382 3.24 2.081 5.866 2.081 1.402 0 2.806-.255 4.202-.759V24.43c-1.348.607-2.697.909-4.045.909ZM62.146 14.024c.692-.572 1.604-.858 2.736-.858.25 0 .528.021.816.054v4.173a8.183 8.183 0 0 0-1.68-.19c-1.982 0-2.973 1.08-2.973 3.257v8.04h-4.12v-8.597c0-2.065-.22-4.131-.676-6.18h4.057c.091.356.183.898.31 1.654l.083.49h.063c.456-.858.912-1.477 1.384-1.843Z"
        clipRule="evenodd"
      />
      <path
        fill={logoColor || "#F6E500"}
        fillRule="evenodd"
        d="M23.138 22.884v.646c0 1.272-.414 2.424-1.198 3.332-.405.47-1.954 1.979-4.947 1.728-1.035-.087-2.358-.317-3.5-1.324-.563.507-1.23.863-2.037 1.087a7.715 7.715 0 0 1-2.021.272c-1.094 0-2.42-.243-3.684-1.105-.931-.636-1.666-1.963-1.83-3.303-.06-.503-.09-.912-.091-1.288-.006-2.037 0-11.152 0-11.152v-.151h2.38c1.014 0 1.014.744 1.014 1.101 0 .077-.009 7.699 0 9.608.002.42.04.857.114 1.3.079.477.299.822.672 1.055.549.343 1.207.455 2.014.345.309-.044.707-.125 1.04-.38.413-.318.645-.81.708-1.505.018-.194.017-.411.017-.62v-9.62c0-.281 0-1.027.954-1.028h1.514c.145.003.432.009.67.244.269.267.268.622.267.756-.002.926-.003 4.04-.003 6.525l-.002 3.203c0 .405.024.93.223 1.389.19.435.477.712.904.873.49.185 1 .246 1.51.182.605-.076 1.05-.2 1.404-.584.276-.3.439-.696.483-1.178.035-.375.053-.756.053-1.133.005-1.85 0-9.493 0-9.493.001-.285.001-1.04.95-1.04h1.557a.895.895 0 0 1 .623.244c.245.244.243.567.242.674-.002.815 0 8.097 0 10.34Zm2.736 4.55c-.454-.4-1.51-1.582-1.51-3.897 0-1.938.677-3.022 1.04-3.464-.525-.666-1.056-1.868-1.056-3.372 0-1.698.517-2.76.95-3.353.847-1.154 2.154-1.715 3.994-1.715h7.592v2.232c0 1.066-.809 1.066-1.113 1.066h-5.982c-1.448 0-1.667.36-1.799.575-.261.427-.346.945-.26 1.584.033.24.094.547.28.793.272.363.802.54 1.622.54h5.949c.874 0 1.057.551 1.057 1.015v1.288c-.002.14-.009.455-.26.715-.281.29-.65.288-.773.287-.789-.002-2.633-.001-4.111 0h-1.936c-.334.009-.737.019-1.08.171a1.08 1.08 0 0 0-.622.656c-.144.388-.192.79-.142 1.195.058.47.15.814.426 1.073.27.254.557.382.854.382h9.575c.463-1.69.716-3.468.716-5.306C39.285 8.937 30.49.05 19.642.05 8.794.05 0 8.937 0 19.9 0 30.86 8.794 39.747 19.642 39.747c7.797 0 14.532-4.59 17.704-11.241h-8.559c-1.094 0-2.129-.38-2.913-1.071Z"
        clipRule="evenodd"
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
