import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { Oauth } from '@swit-api/oauth';

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
  'message:write'
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
  res.send(tokenResponse);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

