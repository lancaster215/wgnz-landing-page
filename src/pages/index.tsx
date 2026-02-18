import { gql } from '@apollo/client';
import { HomepageDetails, SpaceNewsNode } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import client from '@/lib/apollo-client';
import Main from '@/components/main';
import APImockResponse from '@/constants/APImockResponse.json'

const GET_SPACE_NEWS = gql`
  query GetSpaceNews($count: Int) {
    allSpaceNews(first: $count) {
      nodes {
        id
        title
        content
        articleDetails {
          articleUrl
        }
      }
    }
  }
`;

const GET_HOMEPAGE_DETAILS = gql`
  query GetHomepageDetails {
    pages {
      nodes {
        aboutUs {
          aboutUsHead
          aboutUsBody
        }
        whatDoWeDo {
          whatDoWeDoHead
          whatDoWeDoBody
        }
        headerForm {
          headerFormTag
          headerFormTitle
          headerFormEmail
        }
        headerForm {
          headerFormTag
          headerFormTitle
          headerFormEmail
          headerFormOffice
          headerFormNumber
          headerFormAddress
        }
        followLinkedin{
          followLinkedinBody
          followLinkedinHeader
        }
        featuredCases {
          featuredCasesHeader
        }
        ourPartners {
          ourPartnersTitle
          ourPartnersHeader
        }
        officeSpace {
          officeSpaceCount
          officeSpaceText
          partnersAndCollaboratorsCount
          partnersAndCollaboratorsText
          establishedYear
          establishedText
        }
        ourClients {
          ourClientsHeader
        }
        awardsAndAccreditation {
          awardsAndAccreditationHeader
        }
        latestNews{
          latestNewsHeader
          latestNewsTitle
          latestNewsBody
        }
        newsletter {
          newsletterTitle
          newsletterBody
        }
        letsGetInTouch {
          letsGetInTouchHeader
        }
      }
    }
  }
`;

export interface HomeProps {
  newsPosts: SpaceNewsNode[];
  ssrDuration: number,
  homepageData: HomepageDetails[];
}

const Home: NextPage<HomeProps> = ({ newsPosts, homepageData,  ssrDuration }) => {
  return ( 
    <Main 
      ssrDuration={ssrDuration} 
      newsPosts={newsPosts.length > 0 ? newsPosts : APImockResponse} 
      homepageData={homepageData}
    />
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const startTime = performance.now();

  try {
    const { data: spaceNewsData, error: spaceNewsErrors } = await client.query({
      query: GET_SPACE_NEWS,
      variables: { count: 10 },
      // Disable cache for testing to ensure it hits the API every time
      fetchPolicy: 'no-cache', 
    });

    const { data: homepageData, error: homepageErrors } = await client.query({
      query: GET_HOMEPAGE_DETAILS,
      variables: { count: 10 },
      // Disable cache for testing to ensure it hits the API every time
      fetchPolicy: 'no-cache', 
    })

    if (spaceNewsErrors) {
      console.error("GraphQL Errors:", spaceNewsErrors);
    }

    const endTime = performance.now(); // End timer
    const durationInMs = Math.round(endTime - startTime);
    
    return {
      props: {
        homepageData: homepageData?.pages?.nodes || [],
        newsPosts: spaceNewsData?.allSpaceNews?.nodes || [],
        ssrDuration: durationInMs,
      },
    };
  } catch (error) {
    // This will print the actual error in your VS Code terminal
    console.error("CRITICAL SSR ERROR:", error);
    return {
      props: { newsPosts: [], ssrDuration: 0, homepageData: {} as HomepageDetails },
    };
  }
}

export default Home;