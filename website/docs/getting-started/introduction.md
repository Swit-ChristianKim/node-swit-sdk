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

ClientV1 provides services for each domain assigned 
as a business-based property It is available.

You can import user information as shown in the example below.

```typescript

const clientV1 = client.v1;

const res = await client.user.userInfo();
```

Please refer to the link below for additional ClientV1 information.

- [ClientV1](/api/api-client/class/ClientV1)

## 4. service clientV1 mapping by properties


|**Property Name**|**Service Name**|
|---|---|
|approval | [ApprovalService](/api/api-client/class/ApprovalService) |
|channel | [ChannelService](/api/api-client/class/ChannelService) |
|chat | [ChatService](/api/api-client/class/ChatService) |
|chatMessage | [ChatMessageService](/api/api-client/class/ChatMessageService) |
|customField | [CustomFieldService](/api/api-client/class/CustomFieldService) |
|idea | [IdeaService](/api/api-client/class/IdeaService) |
|ideaComment | [IdeaCommentService](/api/api-client/class/IdeaCommentService) |
|membership | [MembershipService](/api/api-client/class/MembershipService) |
|message | [MessageService](/api/api-client/class/MessageService) |
|messageComment | [MessageCommentService](/api/api-client/class/MessageCommentService) |
|project | [ProjectService](/api/api-client/class/ProjectService) |
|projectBucket | [ProjectBucketService](/api/api-client/class/ProjectBucketService) |
|task | [TaskService](/api/api-client/class/TaskService) |
|taskChecklist | [TaskChecklistService](/api/api-client/class/TaskChecklistService) |
|taskComment | [TaskCommentService](/api/api-client/class/TaskCommentService) |
|team | [TeamService](/api/api-client/class/TeamService) |
|user | [UserService](/api/api-client/class/UserService) |
|workspace | [WorkspaceService](/api/api-client/class/WorkspaceService) |



