export interface AuthorizeUrl {
  clientId: string,
  redirectUri: string,
  responseType: string,
  state?: string,
  scope?: string,
}

export interface TokenByAuthorizationCode {
  grantType: string,
  clientId: string,
  clientSecret: string,
  redirectUri: string,
  code: string
}

export interface TokenByRefreshToken {
  grantType: string,
  clientId: string,
  clientSecret: string,
  refreshToken: string
}