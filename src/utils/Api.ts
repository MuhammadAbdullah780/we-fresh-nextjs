export const getHomePageData = async (query: string) => {
  try {
    const response = await fetch(
      "https://graphql.contentful.com/content/v1/spaces/likicnef8gdp",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer sgTLpJCREoequEBUmgyGkIMCB1yHU-M3-pAVQzDaQDA",
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
