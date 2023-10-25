import { Oauth } from './oauth';

describe('oauth', () => {
  it('getAuthorizeUrl', () => {
    const options =  {
      clientId: 'fake-client_id',
      redirectUri: 'https://test-site/callback',
      responseType: 'code',
      state: '',
      scope: 'channel:read message:read channel:write idea:read idea:write message:write'
    };
    const baseUrl = new URL('https://openapi.swit.io/oauth/authorize');
    baseUrl.searchParams.append('client_id', options.clientId);
    baseUrl.searchParams.append('redirect_uri', options.redirectUri);
    baseUrl.searchParams.append('response_type', options.responseType);
    baseUrl.searchParams.append('state', options.state);
    baseUrl.searchParams.append('scope', options.scope);

    const oauth  = new Oauth();
    const url = oauth.getAuthorizeUrl(options);

    expect(baseUrl.toString()).toEqual(url);
  });
});
