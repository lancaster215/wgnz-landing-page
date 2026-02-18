export interface ACFArticleDetails {
  articleUrl: string;
}

export interface AboutUs {
  aboutUsHead: string;
  aboutUsBody: string;
}

export interface WhatDoWeDo {
  whatDoWeDoHead: string;
  whatDoWeDoBody: string;
}

export interface HeaderForm {
  headerFormTag: string;
  headerFormTitle: string;
  headerFormEmail: string;
  headerFormOffice: string;
  headerFormNumber: string;
  headerFormAddress: string;
}

export interface FollowLinkedIn {
  followLinkedinHeader: string;
  followLinkedinBody: string;
}

export interface FeaturedCases {
  featuredCasesHeader: string;
}

export interface OurPartners {
  ourPartnersTitle: string;
  ourPartnersHeader: string;
}

export interface OfficeSpace {
  officeSpaceCount: number;
  officeSpaceText: string;
  partnersAndCollaboratorsCount: number;
  partnersAndCollaboratorsText: string;
  establishedYear: number;
  establishedText: string;
}

export interface OurClients {
  ourClientsHeader: string;
}

export interface AwardsAndAccreditation {
  awardsAndAccreditationHeader: string
}

export interface LatestNews {
  latestNewsHeader: string;
  latestNewsTitle: string;
  latestNewsBody: string;
}

export interface NewsLetter {
  newsletterTitle: string;
  newsletterBody: string;
}

export interface LetsGetInTouch {
  letsGetInTouchHeader: string;
}

export interface SpaceNewsNode {
  id: string;
  title: string;
  content: string;
  articleDetails: ACFArticleDetails;
}

export interface HomepageDetails {
  aboutUs: AboutUs;
  whatDoWeDo: WhatDoWeDo;
  headerForm: HeaderForm;
  followLinkedin: FollowLinkedIn;
  featuredCases: FeaturedCases;
  ourPartners: OurPartners;
  officeSpace: OfficeSpace;
  ourClients: OurClients;
  awardsAndAccreditation: AwardsAndAccreditation;
  latestNews: LatestNews;
  newsletter: NewsLetter;
  letsGetInTouch: LetsGetInTouch;
}

export interface GetSpaceNewsData {
  allSpaceNews: {
    nodes: SpaceNewsNode[];
  };
}