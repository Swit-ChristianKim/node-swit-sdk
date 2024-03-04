/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCompanyWorkspaceInviteParam } from '../models/AddCompanyWorkspaceInviteParam';
import type { AddCompanyWorkspaceInviteResponse } from '../models/AddCompanyWorkspaceInviteResponse';
import type { Emoji } from '../models/Emoji';
import type { GetWorkspaceInfoResponse } from '../models/GetWorkspaceInfoResponse';
import type { GetWorkspaceListResponse } from '../models/GetWorkspaceListResponse';
import type { GetWorkspaceUserListResponse } from '../models/GetWorkspaceUserListResponse';
import type { PutWorkspaceParam } from '../models/PutWorkspaceParam';
import type { PutWorkspaceResponse } from '../models/PutWorkspaceResponse';
import type { WorkspaceGroup } from '../models/WorkspaceGroup';
import type { WorkspaceUserResponse } from '../models/WorkspaceUserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkspaceService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get workspace info
   * `Bot-compatible` Retrieves information about a workspace.
   * @returns any Successfully retrieved the workspace's information.
   * @throws ApiError
   */
  public workspaceInfo({
    id,
  }: {
    /**
     * The ID of the workspace.
     */
    id: string,
  }): CancelablePromise<{
    data?: GetWorkspaceInfoResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/workspace.info',
      query: {
        'id': id,
      },
    });
  }
  /**
   * List out workspaces
   * Lists out a given number of workspaces the user joined. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the list of workspaces.
   * @throws ApiError
   */
  public workspaceList({
    limit,
    offset,
    name,
    page,
  }: {
    /**
     * The number of workspaces to retrieve.
     */
    limit?: number,
    /**
     * Pass the "offset" string returned by the previous call to skip already returned entries.
     */
    offset?: string,
    /**
     * The domain of the workspace to retrieve
     */
    name?: string,
    /**
     * The page number for a paginated response
     * @deprecated
     */
    page?: number,
  }): CancelablePromise<{
    data?: GetWorkspaceListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/workspace.list',
      query: {
        'limit': limit,
        'offset': offset,
        'name': name,
        'page': page,
      },
    });
  }
  /**
   * Update a workspace
   * Updates an existing workspace.
   * @returns any Successfully updated the workspace.
   * @throws ApiError
   */
  public workspaceUpdate({
    requestBody,
  }: {
    requestBody: PutWorkspaceParam,
  }): CancelablePromise<{
    data?: PutWorkspaceResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/workspace.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Get a workspace member's profile
   * `Bot-compatible` Retrieves a user's profile registered in a given workspace.
   * @returns any Successfully retrieved the user's profile.
   * @throws ApiError
   */
  public workspaceUserInfo({
    workspaceId,
    userId,
  }: {
    /**
     * The ID of the workspace.
     */
    workspaceId: string,
    /**
     * The ID of the user. If not passed, the signed-in user's profile will be retrieved.
     */
    userId?: string,
  }): CancelablePromise<{
    data?: WorkspaceUserResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/workspace.user.info',
      query: {
        'workspace_id': workspaceId,
        'user_id': userId,
      },
    });
  }
  /**
   * List out workspace members
   * `Bot-compatible` Lists out a given number of members from a workspace. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the members.
   * @throws ApiError
   */
  public workspaceUserList({
    workspaceId,
    page,
    limit,
    offset,
    keyword,
    type,
  }: {
    /**
     * The ID of the workspace.
     */
    workspaceId: string,
    /**
     * The page number for a paginated response
     * @deprecated
     */
    page?: number,
    /**
     * The number of objects to retrieve.
     */
    limit?: number,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
    /**
     * The search keyword used to filter the member list based on their name or email. When using this parameter, make sure to pass the `type` parameter too.
     */
    keyword?: string,
    /**
     * Whether to search by name or email.
     */
    type?: 'name' | 'email',
  }): CancelablePromise<{
    data?: GetWorkspaceUserListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/workspace.user.list',
      query: {
        'page': page,
        'workspace_id': workspaceId,
        'limit': limit,
        'offset': offset,
        'keyword': keyword,
        'type': type,
      },
    });
  }
  /**
   * Invite a member
   * Invites a member to the workspace.
   * @returns any Successfully invited the member to the workspace
   * @throws ApiError
   */
  public organizationWorkspaceInvite({
    requestBody,
  }: {
    requestBody?: AddCompanyWorkspaceInviteParam,
  }): CancelablePromise<{
    data?: AddCompanyWorkspaceInviteResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/organization.workspace.invite',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Retrieve a workspace's list of groups
   * Retrieves a list of groups in a workspace
   * @returns any Successfully retrieved the workspace group list
   * @throws ApiError
   */
  public workspaceGroupList({
    wsId,
    page,
    cnt,
    keyword,
  }: {
    /**
     * The ID of the workspace
     */
    wsId: string,
    /**
     * The page number for a paginated response.
     * @deprecated
     */
    page?: number,
    /**
     * The number of objects to return per page
     */
    cnt?: number,
    /**
     * The search keyword used to filter the group list
     */
    keyword?: string,
  }): CancelablePromise<{
    data?: Array<WorkspaceGroup>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/workspace.group.list',
      query: {
        'page': page,
        'cnt': cnt,
        'ws_id': wsId,
        'keyword': keyword,
      },
    });
  }
  /**
   * Invite users to a group in a workspace
   * Invites a user to a group in a workspace.
   * @returns void
   * @throws ApiError
   */
  public postApiWorkspaceGroupInvite({
    requestBody,
  }: {
    /**
     * The users to invite and the group and workspace to invite them to.
     */
    requestBody?: {
      /**
       * The ID of the workspace.
       */
      workspace_id?: string;
      /**
       * The ID of the group.
       */
      group_id?: string;
      /**
       * The IDs of users.
       */
      user_ids?: Array<string>;
    },
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/workspace.group.invite',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Retrieve a custom emoji list from a workspace
   * Retrieve the list of custom emojis used in a given workspace
   * @returns any Successfully retrieved the emoji list.
   * @throws ApiError
   */
  public emojiListByWorkspace({
    wsId,
  }: {
    /**
     * The ID of the workspace
     */
    wsId: string,
  }): CancelablePromise<{
    /**
     * The list of emojis.
     */
    data?: Array<Emoji>;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/emoji.listByWorkspace',
      query: {
        'ws_id': wsId,
      },
    });
  }
}
