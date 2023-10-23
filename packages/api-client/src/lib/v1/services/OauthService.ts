import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OauthService {
  constructor(public readonly httpRequest: BaseHttpRequest) {
  }

  public getAuthorizeUrl(
    clientId: string,
    redirectUri: string,
    responseType: string,
    state?: string,
    scope?: string,
  ): CancelablePromise<{
    data?: any;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/authorize',
      query: {
        'client_id': clientId,
        'redirect_uri': redirectUri,
        'response_type': responseType,
        'state': state,
        'scope': scope,
      }
    });
  }

  public getTokenByAuthorizationCode(
    grantType: string,
    clientId: string,
    clientSecret:string,
    redirectUri: string,
    code: string,
  ){
    return this.httpRequest.request({
      method: 'POST',
      url: '/token',
      query: {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': clientSecret,
        'redirect_uri': redirectUri,
        'code': code,
      }
    });
  }


  public getTokenByRefreshToken(
    grantType: string,
    clientId: string,
    clientSecret:string,
    redirectUri: string,
    refreshToken: string,
  ){
    return this.httpRequest.request({
      method: 'POST',
      url: '/token',
      query: {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': clientSecret,
        'refresh_token': refreshToken,
      }
    });
  }
}