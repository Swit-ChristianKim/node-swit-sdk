import { ApiClient } from '../src/lib/api-client';
import * as tstyche from 'tstyche';
import { GetUserInfoResponse } from '../src/lib/v1';

describe('apiClient', () => {
  it('should work', async () => {
    const token = 'test-key';
    const client = new ApiClient({
      token
    });
    try {
      const res = await client.v1.user.userInfo();

      tstyche.expect(res.data).type.toEqual<GetUserInfoResponse | undefined>();
    } catch (e) {
      console.log(e);
    }

    // expect(token).toEqual(client.token);
  });
});