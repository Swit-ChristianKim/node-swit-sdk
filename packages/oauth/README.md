# Swit Api Oauth

- Provides a method for helpers for oauth authentication.

## Requirements 

- Nodejs v18 or higher

## Install

```shell
npm install @swit-api/oauth
```

# Basic Usage

## Create Oauth

Create an instance by putting options in the Oauth class constructor.

```typescript
import { Oauth } from '@swit-api/oauth';

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

```


## Get url to authorize oauth

Get oauth authentication page url via getAuthorizeUrl method.

```typescript

oauth.getAuthorizeUrl()

```

## Get url to authorize oauth

After authentication, you receive the code parameter 
that is passed to the redirect url and pass it to the function below to get a token.

```typescript
const code = 'Code passed after authentication';
oauth.getTokenByAuthorizationCode(code);

```


## Update token with refresh token

Get a renewed token with a previously received refresh token.

```typescript
const refreshToken = 'refresh token';
oauth.getTokenByRefreshToken(refreshToken);

```
