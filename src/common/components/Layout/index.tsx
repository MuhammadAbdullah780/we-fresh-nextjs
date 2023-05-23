import React from "react";
// Components
import Footer, { FooterProps } from "./Footer";
import Header, { HeaderProps } from "./Header";

type LayotProps = {
  children: React.ReactNode;
  data: {
    header: HeaderProps;
    footer: FooterProps;
  };
};

const index = ({ children, data }: LayotProps) => {
  return (
    <div className="overflow-hidden relative w-screen h-full">
      <Header header={data.header} />
      <main className="min-h-screen">{children}</main>
      <Footer footer={data.footer} />
    </div>
  );
};

export default index;
