import { ApiClient } from '@swit-api/api-client';
import { AuthorizeUrl, TokenByAuthorizationCode, TokenByRefreshToken } from './models';


export class Oauth {
  private client: ApiClient;

  constructor() {
    this.client = new ApiClient({ token: undefined });
  }

  private getOauthService() {
    return this.client.oauth.oauth;
  }

  public getAuthorizeUrl(option: AuthorizeUrl) {
    return this.getOauthService().getAuthorizeUrl(option);
  }

  public getTokenByAuthorizationCode(option: TokenByAuthorizationCode) {
    return this.getOauthService().getTokenByAuthorizationCode(option);
  }

  public getTokenByRefreshToken(option: TokenByRefreshToken) {
    return this.getOauthService().getTokenByRefreshToken(option);
  }

}
