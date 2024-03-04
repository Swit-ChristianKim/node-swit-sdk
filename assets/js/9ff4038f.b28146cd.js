"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2353],{4590:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(5893),s=n(1151);const r={sidebar_position:1,description:"Getting started"},c="Getting Started",a={id:"getting-started/introduction",title:"Getting Started",description:"Getting started",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/node-swit-sdk/docs/getting-started/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/Swit-ChristianKim/node-swit-sdk/edit/main/website/docs/getting-started/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Getting started"},sidebar:"doscSidebar",previous:{title:"Getting Started",permalink:"/node-swit-sdk/docs/category/getting-started"},next:{title:"Oauth authentication and publish token",permalink:"/node-swit-sdk/docs/getting-started/oauth"}},l={},d=[{value:"1. Install",id:"1-install",level:2},{value:"2. Get the ApiClient",id:"2-get-the-apiclient",level:2},{value:"3. Call Api",id:"3-call-api",level:2},{value:"4. service clientV1 mapping by properties",id:"4-service-clientv1-mapping-by-properties",level:2},{value:"5.Direct access to internal Axios instance",id:"5direct-access-to-internal-axios-instance",level:2}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,t.jsx)(i.h2,{id:"1-install",children:"1. Install"}),"\n",(0,t.jsx)(i.p,{children:"Node Swit SDK can be easily installed via npm."}),"\n",(0,t.jsx)(i.p,{children:"Run the following command in the root directory of your project."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"npm install @swit-api/api-client @swit-api/oauth\n"})}),"\n",(0,t.jsx)(i.h2,{id:"2-get-the-apiclient",children:"2. Get the ApiClient"}),"\n",(0,t.jsx)(i.p,{children:"Create an instance by inserting the access token obtained\nfrom oauth api with the ApiClient class."}),"\n",(0,t.jsx)(i.p,{children:"You can use v1 open api through v1 properties on created client objects."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"import { ApiClient, ApiClientConfig } from '@swit-api/api-client';\n\nconst token = process.env.SWIT_OPEN_API_TOKEN; // YOUR ACCESS TOKEN\nconst config: ApiClientConfig= {\n    token: SWIT_OPEN_API_TOKEN,\n};\n\nconst client = new ApiClient(config);\nconst clientV1 = client.v1;\n"})}),"\n",(0,t.jsx)(i.h2,{id:"3-call-api",children:"3. Call Api"}),"\n",(0,t.jsx)(i.p,{children:"ClientV1 provides services for each domain assigned\nas a business-based property It is available."}),"\n",(0,t.jsx)(i.p,{children:"You can import user information as shown in the example below."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-typescript",children:"\nconst clientV1 = client.v1;\n\nconst res = await client.user.userInfo();\n"})}),"\n",(0,t.jsx)(i.p,{children:"Please refer to the link below for additional ClientV1 information."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/ClientV1",children:"ClientV1"})}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"4-service-clientv1-mapping-by-properties",children:"4. service clientV1 mapping by properties"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Property Name"})}),(0,t.jsx)(i.th,{children:(0,t.jsx)(i.strong,{children:"Service Name"})})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"approval"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/ApprovalService",children:"ApprovalService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"channel"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/ChannelService",children:"ChannelService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"chat"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/ChatService",children:"ChatService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"chatMessage"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/ChatMessageService",children:"ChatMessageService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"customField"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/CustomFieldService",children:"CustomFieldService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"idea"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/IdeaService",children:"IdeaService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"ideaComment"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/IdeaCommentService",children:"IdeaCommentService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"membership"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/MembershipService",children:"MembershipService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"message"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/MessageService",children:"MessageService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"messageComment"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/MessageCommentService",children:"MessageCommentService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"project"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/ProjectService",children:"ProjectService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"projectBucket"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/ProjectBucketService",children:"ProjectBucketService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"task"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/TaskService",children:"TaskService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"taskChecklist"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/TaskChecklistService",children:"TaskChecklistService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"taskComment"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/TaskCommentService",children:"TaskCommentService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"team"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/TeamService",children:"TeamService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"user"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/UserService",children:"UserService"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"workspace"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.a,{href:"/api/api-client/class/WorkspaceService",children:"WorkspaceService"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"5direct-access-to-internal-axios-instance",children:"5.Direct access to internal Axios instance"}),"\n",(0,t.jsx)(i.p,{children:"Use internally when a separate customization of settings is required\nYou can also access and use an Axios instance."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-ts",children:"const client = new ApiClient(config);\nclient.clientV1AxiosRef.interceptors.response.use(\n  (response) => {\n    // response handle\n    return response;\n  },\n  (error) => {\n    // error handle\n    return Promise.reject(error);\n  }\n);\n"})})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>c});var t=n(7294);const s={},r=t.createContext(s);function c(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);