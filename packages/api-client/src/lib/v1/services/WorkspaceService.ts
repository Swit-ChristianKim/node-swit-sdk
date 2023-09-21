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
   * Retrieves information about a workspace.
   * @param id The ID of the workspace.
   * @returns any Successfully retrieved the workspace's information.
   * @throws ApiError
   */
  public workspaceInfo(
    id: string,
  ): CancelablePromise<{
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
   * @param limit The number of workspaces to retrieve.
   * @param offset Pass the "offset" string returned by the previous call to skip already returned entries.
   * @param name The domain of the workspace to retrieve
   * @param page The page number for a paginated response
   * @returns any Successfully retrieved the list of workspaces.
   * @throws ApiError
   */
  public workspaceList(
    limit?: number,
    offset?: string,
    name?: string,
    page?: number,
  ): CancelablePromise<{
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
   * @param requestBody
   * @returns any Successfully updated the workspace.
   * @throws ApiError
   */
  public workspaceUpdate(
    requestBody: PutWorkspaceParam,
  ): CancelablePromise<{
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
   * Retrieves a user's profile registered in a given workspace.
   * @param workspaceId The ID of the workspace.
   * @param userId The ID of the user. If not passed, the signed-in user's profile will be retrieved.
   * @returns any Successfully retrieved the user's profile.
   * @throws ApiError
   */
  public workspaceUserInfo(
    workspaceId: string,
    userId?: string,
  ): CancelablePromise<{
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
   * Lists out a given number of members from a workspace. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @param workspaceId The ID of the workspace.
   * @param page The page number for a paginated response
   * @param limit The number of objects to retrieve.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @param keyword The search keyword used to filter the member list based on their name or email. When using this parameter, make sure to pass the `type` parameter too.
   * @param type Whether to search by name or email.
   * @returns any Successfully retrieved the members.
   * @throws ApiError
   */
  public workspaceUserList(
    workspaceId: string,
    page?: number,
    limit?: number,
    offset?: string,
    keyword?: string,
    type?: 'name' | 'email',
  ): CancelablePromise<{
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
   * @param requestBody
   * @returns any Successfully invited the member to the workspace
   * @throws ApiError
   */
  public organizationWorkspaceInvite(
    requestBody?: AddCompanyWorkspaceInviteParam,
  ): CancelablePromise<{
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
   * @param wsId The ID of the workspace
   * @param page The page number for a paginated response.
   * @param cnt The number of objects to return per page
   * @param keyword The search keyword used to filter the group list
   * @returns any Successfully retrieved the workspace group list
   * @throws ApiError
   */
  public workspaceGroupList(
    wsId: string,
    page?: number,
    cnt?: number,
    keyword?: string,
  ): CancelablePromise<{
    data?: WorkspaceGroup;
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
   * @param requestBody The users to invite and the group and workspace to invite them to.
   * @returns void
   * @throws ApiError
   */
  public postApiWorkspaceGroupInvite(
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
  ): CancelablePromise<void> {
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
   * @param wsId The ID of the workspace
   * @returns any Successfully retrieved the emoji list
   * @throws ApiError
   */
  public getApiEmojiListByWorkspace(
    wsId: string,
  ): CancelablePromise<{
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
