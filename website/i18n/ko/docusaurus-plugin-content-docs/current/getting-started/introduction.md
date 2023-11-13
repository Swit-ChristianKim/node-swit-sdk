---
sidebar_position: 1
description: "소개 및 사용법"
---

# 소개 및 사용법

## 1. 라이브러리 설치

Swit Node Sdk는 NPM을 통해서 설치할수 있습니다.

프로젝트 Root에서 아래와 같은 명령어를 실행하세요.

```shell
npm install @swit-api/api-client @swit-api/oauth
```

## 2. ApiClient 생성하기

oauth api로 가져온 토큰을 ApiClinet 생성자에 token값을 넣고 생성해주세요.
생성된 ApiClient의 v1 속성을 통해서 open api v1 관련 api를 호출할수 있는 
메서드들을 제공합니다.

```typescript
import { ApiClient, ApiClientConfig } from '@swit-api/api-client';

const token = process.env.SWIT_OPEN_API_TOKEN; // 액세스 토큰;
const config: ApiClientConfig= {
    token: SWIT_OPEN_API_TOKEN,
};

const client = new ApiClient(config);
const clientV1 = client.v1;
```

## 3. Api 호출하기

clientV1에는 비지니스 기준의 프로퍼티로 할당된 각 도메인 별 서비스를 
사용할 수 있습니다.

아래 예시와 같이 유저 정보를 가져올수 있습니다.

```typescript

const clientV1 = client.v1;

const res = await client.user.userInfo();
```

추가적인 ClientV1 정보는 아래 링크를 참고하시길 바랍니다.

- [ClientV1](/api/api-client/class/ClientV1)

## 4. Properties 별 서비스 clientV1 매핑


|**Property명**|**Service명**|
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


