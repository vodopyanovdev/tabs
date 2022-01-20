export interface IDataResponse {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  pages: number;
  orderBy: string;
  data: IPost[];
}

export interface IData {
  response: IData;
}

export interface IPost {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: string;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
}
