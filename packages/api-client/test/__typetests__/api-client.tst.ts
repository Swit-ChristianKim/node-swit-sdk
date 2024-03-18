import { ApiClient } from '../../src';
import { GetUserInfoResponse } from '../../src/lib/v1';
import { describe, test ,expect } from 'tstyche';

describe('api-client check types', () => {
  test('return GetUserInfoResponse type', async () => {
    const client = new ApiClient({
      token: 'test-key'
    });
    try {
      const res = await client.v1.user.userInfo();
      if (res?.data) {
        expect<GetUserInfoResponse>().type.toEqual(res.data);
      }
    } catch (e) {
      // console.log(e);
    }
  });
});