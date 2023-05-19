export const homePageQuery = `
{
    homePageCollection(limit: 0) {
      items {
        homePageMetaTitle
        homePageMetaDescription {
          json
        }
        logo {
          title
          url
        }
        homePageSlug
        homePageHero {
          heroTitle {
            json
          }
          heroImage {
            title
            url
          }
          heroLinksCollection {
            items {
              image {
                title
                url
              }
              link
            }
          }
          heroButton {
            text
            backgroundColor
          }
        }
        homePageServicesSection {
          servicesTitle {
            json
          }
          servicesImage {
            title
            url
          }
          servicesSliderContentCollection {
            items {
              servicesSliderTitle
              servicesSliderImage {
                title
                url
              }
              servicesSliderDescriptionCollection {
                items {
                  description {
                    json
                  }
                }
              }
            }
          }
        }
        homePageFindUs {
          findUsTitle {
            json
          }
          findUsImage {
            title
            url
          }
          findUsButton {
            text
            backgroundColor
          }
        }
        homePageOurPartners {
          ourPartnersTitle {
            json
          }
          ourPartnersDescription {
            json
          }
          ourPartnersImageCollection {
            items {
              title
              url
            }
          }
        }
        homePageGotQuestions {
          gotQuestionsTitle {
            json
          }
          gotQuestionsDescription {
            json
          }
          gotQuestionsQuestionsCollection {
            items {
              question {
                json
              }
              answer {
                json
              }
            }
          }
        }
        homePageStillHaveAQuestion {
          stillHaveAQuestionTitle {
            json
          }
          stillHaveAQuestionDescription {
            json
          }
          stillHaveAQuestionInfoCollection {
            items {
              infoContent {
                json
              }
            }
          }
        }
        homePageGetTheApp {
          getTheAppTitle {
            json
          }
          getTheAppDescription {
            json
          }
          getTheAppImageCollection {
            items {
              title
              url
            }
          }
        }
        homePageBusinessSection {
          businessTitle {
            json
  }
          businessDescription {
            json
          }
          businessButton {
            text
            backgroundColor
          }
        }
      }
    }
  }
`;


