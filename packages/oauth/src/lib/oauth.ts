import { ApiClient, CancelablePromise } from '@swit-api/api-client';
import { OauthOptions, TokenResponse } from './models';


export class Oauth {
  private readonly client: ApiClient;
  private readonly options: OauthOptions;

  constructor(options: OauthOptions) {
    this.options = {
      ...options
    };

    this.client = new ApiClient({ token: undefined });
  }

  private getOauthService() {
    return this.client.oauth.oauth;
  }

  public getAuthorizeUrl(): string {
    const option = this.options;
    return this.getOauthService().getAuthorizeUrl({
      clientId: option.clientId,
      redirectUri: option.redirectUri,
      responseType: 'code',
      state: option.state ?? '',
      scope: option.scope ?? ''
    });
  }

  public getTokenByAuthorizationCode(code: string): CancelablePromise<TokenResponse> {
    const option = this.options;
    return <CancelablePromise<TokenResponse>>this.getOauthService().getTokenByAuthorizationCode({
      clientId: option.clientId,
      clientSecret: option.clientSecret,
      grantType: 'authorization_code',
      redirectUri: option.redirectUri,
      code
    });
  }

  public getTokenByRefreshToken(refreshToken: string): CancelablePromise<TokenResponse> {
    const option = this.options;
    return <CancelablePromise<TokenResponse>>this.getOauthService().getTokenByRefreshToken({
      clientId: option.clientId,
      clientSecret: option.clientSecret,
      grantType: 'refresh_token',
      refreshToken
    });
  }

}
