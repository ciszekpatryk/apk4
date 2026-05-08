export type RootStackParamList = {
  Home: undefined;
  Details: {
    id: number;
    title: string;
    description: string;
    location: string;
    hour: string;
    category: string;
    speaker: string;
  };
  ApiPosts: undefined;
  ApiPostDetails: {
  id: number;
  title: string;
  body: string;
};
};