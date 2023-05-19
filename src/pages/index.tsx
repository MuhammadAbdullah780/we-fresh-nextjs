import React from "react";
import Head from "next/head";
// Components
import FindUsSection from "../containers/FindUsSection";
import GetTheAppSection from "../containers/GetTheAppSection";
import HeroSection from "../containers/Hero";
import Layout from "../common/components/Layout";
import OurPartnerSection from "../containers/OurPartnerSection";
import QuerySection from "../containers/QuerySection";
import ServicesSection from "../containers/ServiceSection";
import WeFreshBusinessSection from "../containers/WeFreshBusinessSection";
// Utils
import { getHomePageData } from "../utils/Api";
import { homePageQuery } from "../utils/Query";

export default function Home({ content }: any) {
  return (
    <>
      <Head>
        {/* FAVICON */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="description"
          content="At WeFresh, we specialize in crafting fresh and engaging websites that stand out from the crowd. Our team of talented designers and developers bring a unique perspective to every project, ensuring your online presence leaves a lasting impact and keeps users coming back for more."
        />
        <title>{content.homePageMetaTitle}</title>
      </Head>
      s
      <Layout>
        <HeroSection data={content.homePageHero} />
        <ServicesSection />
        <FindUsSection />
        <OurPartnerSection />
        <QuerySection />
        <GetTheAppSection />
        <WeFreshBusinessSection />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const data = await getHomePageData(homePageQuery);
  return {
    props: {
      content: { ...data },
    },
  };
}
