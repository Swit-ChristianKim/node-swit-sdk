export interface OauthOptions {
  clientId: string,
  clientSecret: string;
  redirectUri: string,
  state?: string,
  scope: string[],
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}