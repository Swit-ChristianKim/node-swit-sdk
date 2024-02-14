---
sidebar_position: 2
description: "Oauth authentication and publish token"
---

# Oauth authentication and publish token

## 1. install

Run the following command in the root directory of your project.

```shell
npm install @swit-api/oauth
```

## 2. Create Oauth

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
].join(' ');

const oauth = new Oauth({
  clientId,
  clientSecret,
  redirectUri,
  state: '',
  scope
});
```


## 3. Get url to authorize oauth

Get oauth authentication page url via getAuthorizeUrl method.

```typescript
oauth.getAuthorizeUrl();
```

## 4. Get url to authorize oauth

After authentication, you receive the code parameter 
that is passed to the redirect url and pass it to the function below to get a token.

```typescript
const code = 'Code passed after authentication';
oauth.getTokenByAuthorizationCode(code);
```


## 5. Update token with refresh token

Get a renewed token with a previously received refresh token.

```typescript
const refreshToken = 'refresh token';
oauth.getTokenByRefreshToken(refreshToken);
```
