export interface ACFArticleDetails {
  articleUrl: string;
  apiId: string;
}

export interface SpaceNewsNode {
  id: string;
  title: string;
  content: string;
  articleDetails: ACFArticleDetails;
}

export interface GetSpaceNewsData {
  allSpaceNews: {
    nodes: SpaceNewsNode[];
  };
}