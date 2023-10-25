import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
import { getQueryString } from '../core/request';

export class OauthService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  public getAuthorizeUrl(
    {
      clientId,
      redirectUri,
      responseType,
      state,
      scope
    }: {
      clientId: string,
      redirectUri: string,
      responseType: string,
      state?: string,
      scope?: string,
    }): string {
    const baseUrl = this.httpRequest.config.BASE;
    const queryString = getQueryString({
      'client_id': clientId,
      'redirect_uri': redirectUri,
      'response_type': responseType,
      'state': state,
      'scope': scope
    });
    return `${baseUrl}/authorize${queryString}`;
  }

  public getTokenByAuthorizationCode(
    {
      grantType,
      clientId,
      clientSecret,
      redirectUri,
      code
    }: {
      grantType: string,
      clientId: string,
      clientSecret: string,
      redirectUri: string,
      code: string
    }) {
    return this.httpRequest.request({
      method: 'POST',
      url: '/token',
      query: {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': clientSecret,
        'redirect_uri': redirectUri,
        'code': code
      }
    });
  }


  public getTokenByRefreshToken(
    grantType: string,
    clientId: string,
    clientSecret: string,
    refreshToken: string
  ) {
    return this.httpRequest.request({
      method: 'POST',
      url: '/token',
      query: {
        'grant_type': grantType,
        'client_id': clientId,
        'client_secret': clientSecret,
        'refresh_token': refreshToken
      }
    });
  }
}