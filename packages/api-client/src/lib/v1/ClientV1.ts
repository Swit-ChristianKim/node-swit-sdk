/* generated by code template -- do no edit */
/* eslint-disable */

import type { BaseHttpRequest } from './core/BaseHttpRequest';

import { ApprovalService } from './services/ApprovalService';
import { ChannelService } from './services/ChannelService';
import { ChatService } from './services/ChatService';
import { ChatMessageService } from './services/ChatMessageService';
import { CustomFieldService } from './services/CustomFieldService';
import { IdeaService } from './services/IdeaService';
import { IdeaCommentService } from './services/IdeaCommentService';
import { MembershipService } from './services/MembershipService';
import { MessageService } from './services/MessageService';
import { MessageCommentService } from './services/MessageCommentService';
import { ProjectService } from './services/ProjectService';
import { ProjectBucketService } from './services/ProjectBucketService';
import { TaskService } from './services/TaskService';
import { TaskChecklistService } from './services/TaskChecklistService';
import { TaskCommentService } from './services/TaskCommentService';
import { TeamService } from './services/TeamService';
import { UserService } from './services/UserService';
import { WorkspaceService } from './services/WorkspaceService';
import { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AxiosInstance } from 'axios';


export class ClientV1 {

  public readonly approval: ApprovalService;
  public readonly channel: ChannelService;
  public readonly chat: ChatService;
  public readonly chatMessage: ChatMessageService;
  public readonly customField: CustomFieldService;
  public readonly idea: IdeaService;
  public readonly ideaComment: IdeaCommentService;
  public readonly membership: MembershipService;
  public readonly message: MessageService;
  public readonly messageComment: MessageCommentService;
  public readonly project: ProjectService;
  public readonly projectBucket: ProjectBucketService;
  public readonly task: TaskService;
  public readonly taskChecklist: TaskChecklistService;
  public readonly taskComment: TaskCommentService;
  public readonly team: TeamService;
  public readonly user: UserService;
  public readonly workspace: WorkspaceService;

  public readonly request: BaseHttpRequest;

  public static createInstance(config:OpenAPIConfig, instance: AxiosInstance){
    return new ClientV1(new AxiosHttpRequest(config, instance));
  }

  constructor(request: BaseHttpRequest) {
    this.request = request;

    this.approval = new ApprovalService(this.request);
    this.channel = new ChannelService(this.request);
    this.chat = new ChatService(this.request);
    this.chatMessage = new ChatMessageService(this.request);
    this.customField = new CustomFieldService(this.request);
    this.idea = new IdeaService(this.request);
    this.ideaComment = new IdeaCommentService(this.request);
    this.membership = new MembershipService(this.request);
    this.message = new MessageService(this.request);
    this.messageComment = new MessageCommentService(this.request);
    this.project = new ProjectService(this.request);
    this.projectBucket = new ProjectBucketService(this.request);
    this.task = new TaskService(this.request);
    this.taskChecklist = new TaskChecklistService(this.request);
    this.taskComment = new TaskCommentService(this.request);
    this.team = new TeamService(this.request);
    this.user = new UserService(this.request);
    this.workspace = new WorkspaceService(this.request);
  }
}