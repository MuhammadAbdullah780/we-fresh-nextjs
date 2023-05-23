export const getHomePageData = async (query: string) => {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          query: query,
        }),
      },
    );

    const data = await response.json();
    return data.data.homePageCollection.items[0];
  } catch (error) {
    console.log(error);
  }
};

export const getWebsiteDetailsData = async (query: string) => {
  try {
    const response = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          query: query,
        }),
      },
    );

    const data = await response.json();
    return data.data.websiteDetailsCollection.items[0];
  } catch (error) {
    console.log(error);
  }
};
