import { ApiClient } from '@swit-api/api-client';


export function oauth(): string {
  const client = new ApiClient({
    token: '',
  });
  // client.oauth;
  return 'oauth';
}



export class Oauth {
  
}
