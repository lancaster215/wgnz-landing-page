import { gql } from '@apollo/client';
import { SpaceNewsNode } from '@/types';
import { GetServerSideProps, NextPage } from 'next';
import client from '@/lib/apollo-client';
import Main from '@/components/main';

const GET_SPACE_NEWS = gql`
  query GetSpaceNews($count: Int) {
    allSpaceNews(first: $count) {
      nodes {
        id
        title
        content
        articleDetails {
          articleUrl
          apiId
        }
      }
    }
  }
`;

export interface HomeProps {
  newsPosts: SpaceNewsNode[];
  ssrDuration: number,
}

const Home: NextPage<HomeProps> = ({ newsPosts, ssrDuration }) => {
  return ( <Main ssrDuration={ssrDuration} newsPosts={newsPosts} />);
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async (context) => {
  const startTime = performance.now();

  try {
    const { data, errors } = await client.query({
      query: GET_SPACE_NEWS,
      variables: { count: 10 },
      // Disable cache for testing to ensure it hits the API every time
      fetchPolicy: 'no-cache', 
    });

    if (errors) {
      console.error("GraphQL Errors:", errors);
    }

    const endTime = performance.now(); // End timer
    const durationInMs = Math.round(endTime - startTime);

    return {
      props: {
        newsPosts: data?.allSpaceNews?.nodes || [],
        ssrDuration: durationInMs,
      },
    };
  } catch (error) {
    // This will print the actual error in your VS Code terminal
    console.error("CRITICAL SSR ERROR:", error);
    return {
      props: { newsPosts: [], ssrDuration: 0 },
    };
  }
}

export default Home;