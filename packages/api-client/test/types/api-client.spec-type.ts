import { ApiClient } from '../../src';
import { expectType } from 'tsd-lite';
import { GetUserInfoResponse } from '../../src/lib/v1';

describe('api-client check types', () => {
  it('should work', async () => {
    const client = new ApiClient({
      token: 'test-key',
    });
    try {
      const res = await client.v1.user.userInfo();
      if(res?.data){
        expectType<GetUserInfoResponse>(res.data);
      }
    } catch (e) {
      // console.log(e);
    }
  });
});