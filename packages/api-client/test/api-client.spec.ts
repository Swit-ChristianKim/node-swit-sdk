import { ApiClient } from '../src/lib/api-client';

describe('apiClient', () => {
  it('should work', async () => {
    const token = 'test-key';
    const client = new ApiClient({
      token
    });
    try {
      const res = await client.v1.user.userInfo();
    } catch (e) {
      console.log(e);
    }

    // expect(token).toEqual(client.token);
  });
});