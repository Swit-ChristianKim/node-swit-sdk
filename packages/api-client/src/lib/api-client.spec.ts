import {ApiClient} from './api-client';

describe('apiClient', () => {
  it('should work', () => {
    const token = 'access-token-key';
    const client = new ApiClient({
      token
    });
    expect(token).toEqual(client.token);
  });
});
