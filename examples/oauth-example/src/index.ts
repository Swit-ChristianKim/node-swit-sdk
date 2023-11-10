import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { Oauth } from '@swit-api/oauth';

import { ApiClient } from '@swit-api/api-client';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const clientId = process.env.CLIENT_ID as string;
const clientSecret = process.env.CLIENT_SECRET as string;
const redirectUri = process.env.REDIRECT_URI as string;
const scope = [
  'channel:read',
  'message:read',
  'channel:write',
  'idea:read',
  'idea:write',
  'message:write',
  'workspace:read',
  'workspace:write',
];

const oauth = new Oauth({
  clientId,
  clientSecret,
  redirectUri,
  state: '',
  scope
});

app.get('/', (req: Request, res: Response) => {
  res.send(`
  <h1>Oauth example</h1>
  <a href='${req.baseUrl}/install'>Install app<a>
  `);
});

app.get('/install', (req: Request, res: Response) => {
  const url = oauth.getAuthorizeUrl();
  res.setHeader('Location', url);
  res.writeHead(302);
  res.end('');
});


app.get('/callback', async (req: Request, res: Response) => {
  const code = req.query['code'];
  const tokenResponse = await oauth.getTokenByAuthorizationCode(code as string);
  const accessToken = tokenResponse.access_token;
  const client = new ApiClient({
    token: accessToken,
  }).v1;
  const list= await client.workspace.workspaceList(
    100,
    '',
    '',
    1,
  )
  res.send(list);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

