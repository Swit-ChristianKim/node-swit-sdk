---
sidebar_position: 1
description: "Getting started"
---

# Getting Started

## 1. Install

Node Swit SDK can be easily installed via npm. 
Run the following command in the root directory of your project.

```shell
npm install @swit-api/api-client @swit-api/oauth
```

## 2. Get the ApiClient


Create an instance by inserting the access token obtained 
from oauth api with the ApiClient class. 
You can use v1 open api through v1 properties on created client objects.

```typescript
import { ApiClient, ApiClientConfig } from '@swit-api/api-client';

const token = process.env.SWIT_OPEN_API_TOKEN; // YOUR ACCESS TOKEN
const config: ApiClientConfig= {
    token: SWIT_OPEN_API_TOKEN,
};

const client = new ApiClient(config);
const clientV1 = client.v1;
```

## 3. Call Api

```typescript

const clientV1 = client.v1;

```
