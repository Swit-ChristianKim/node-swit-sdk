import { Oauth, OauthOptions } from '../index';
import nock from 'nock';

describe('oauth', () => {
  let oauth: Oauth;
  const scope = [
    'channel:read',
    'message:read',
    'channel:write',
    'idea:read',
    'idea:write',
    'message:write'
  ].join(' ');
  const options: OauthOptions = {
    clientId: 'fake-client-id',
    clientSecret: 'fake-client-secret',
    redirectUri: 'https://test-site/callback',
    state: '',
    scope,
  };

  beforeAll(() => {
    oauth = new Oauth(options);
  });
  it('get url to authorize oauth', () => {

    const baseUrl = new URL('https://openapi.swit.io/oauth/authorize');
    baseUrl.searchParams.append('client_id', options.clientId);
    baseUrl.searchParams.append('redirect_uri', options.redirectUri);
    baseUrl.searchParams.append('response_type', 'code');
    baseUrl.searchParams.append('state', options.state as string);
    baseUrl.searchParams.append('scope', options.scope.join(' '));

    const url = oauth.getAuthorizeUrl();

    expect(url).toEqual(url);
  });

  it('get tokens to access api', async () => {
    const responseToken  ={
      'access_token': 'eyJhbGciOiJIUzUxMiIsInR5cxxxxxxx.xxxxxxxx.xxxxxxxxxx',
      'expires_in': 604800,
      'refresh_token': 'QIDQFWZZXFCXXXXX_XXXXX',
      'scope': 'channel:read idea:read',
      'token_type': 'Bearer'
    };
    const scope = nock('https://openapi.swit.io')
      .post('/oauth/token')
      .reply(200, responseToken);
    const code = 'fake-authorization-code';
    const res = await oauth.getTokenByAuthorizationCode(code);
    expect(res).toEqual(responseToken);
    scope.done();
  });

  it('get access tokens by token of refresh', async() => {
    const responseToken  ={
      'access_token': 'eyJhbGciOiJIUzUxMiIsInR5cxxxxxxx.xxxxxxxx.xxxxxxxxxx',
      'expires_in': 604800,
      'refresh_token': 'QIDQFWZZXFCXXXXX_XXXXX',
      'scope': 'channel:read idea:read',
      'token_type': 'Bearer'
    };
    const scope = nock('https://openapi.swit.io')
      .post('/oauth/token')
      .reply(200, responseToken);
    const token = 'fake-refresh-token';
    const res = await oauth.getTokenByRefreshToken(token);
    expect(res).toEqual(responseToken);
    scope.done();
  });
});
