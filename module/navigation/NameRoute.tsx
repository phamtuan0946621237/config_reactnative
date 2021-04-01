export const MainRoute = 'MainStack';
export const LoginRoute = 'LoginRoute';
export const MatchRoute = 'MatchRoute';
export const ServiceRoute = 'ServiceRoute';
export const DocumentRoute = 'DocumentRoute';

export type RootStackParamList = {
  [MainRoute]: undefined;
  [LoginRoute] : undefined
  [MatchRoute] : undefined
  [ServiceRoute] : undefined
  [DocumentRoute] : undefined
};

export const ServiceStackRoute = 'ServiceStack';
export const DocumentStackRoute = 'DocumentStack';

export type HomeStackParamList = {
  [ServiceStackRoute]: undefined;
  [DocumentStackRoute]: undefined;
};
