# Swit Api Client

- The Swit Api Client provides an HTTP Client for Swit Open Api.

## Requirements 

- Nodejs v18 or higher

## Install

```shell
npm install @swit-api/api-client
```

# Basic Usage

## Create Client

Create an instance by inserting the access token obtained from oauth api with the ApiClient class. 

You can use v1 open api through v1 properties on created client objects.

```typescript

import { ApiClient, ApiClientConfig } from '@swit-api/api-client';

// YOUR TOKEN
const token = process.env.SWIT_OPEN_API_TOKEN;
const config: ApiClientConfig= {
    token: SWIT_OPEN_API_TOKEN,
};

const client = new ApiClient(config);
const clientV1 = client.v1;

```


## Call Api

```typescript

const clientV1 = client.v1;

```


## Error handle

```

```