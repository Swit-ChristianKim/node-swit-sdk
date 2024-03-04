/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddProjectParam } from '../models/AddProjectParam';
import type { AddProjectResponse } from '../models/AddProjectResponse';
import type { GetProjectInfoResponse } from '../models/GetProjectInfoResponse';
import type { GetProjectListResponse } from '../models/GetProjectListResponse';
import type { GetProjectTagListResponse } from '../models/GetProjectTagListResponse';
import type { GetProjectUserListResponse } from '../models/GetProjectUserListResponse';
import type { PutProjectParam } from '../models/PutProjectParam';
import type { PutProjectResponse } from '../models/PutProjectResponse';
import type { StatusCustom } from '../models/StatusCustom';
import type { UpdateProjectArchiveParam } from '../models/UpdateProjectArchiveParam';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get a project's information
   * `Bot-compatible` Retrieves information about a project.
   * @returns any Successfully retrieved the project's information.
   * @throws ApiError
   */
  public projectInfo({
    id,
  }: {
    /**
     * The ID of the project.
     */
    id: string,
  }): CancelablePromise<{
    data?: GetProjectInfoResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project.info',
      query: {
        'id': id,
      },
    });
  }
  /**
   * List out projects
   * Lists out a given number of projects from a workspace. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the projects.
   * @throws ApiError
   */
  public projectList({
    workspaceId,
    limit,
    offset,
    activity,
    disclosure,
    name,
    page,
  }: {
    /**
     * The ID of the workspace.
     */
    workspaceId: string,
    /**
     * The number of projects to retrieve.
     */
    limit?: number,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
    /**
     * Filter the list by whether the project is active (`act`) or archived (`arch`). You can select a comma-delimited list of multiple property filters. If not passed, both filters will be selected.
     */
    activity?: string,
    /**
     * Filter the list by whether the project is pubic (`pub`) or private (`pri`). You can select a comma-delimited list of multiple property filters. If not passed, both filters will be selected.
     */
    disclosure?: string,
    /**
     * The exact name of the project (case-insensitive) to retrieve.
     * @deprecated
     */
    name?: string,
    /**
     * The page number for a paginated response.
     * @deprecated
     */
    page?: number,
  }): CancelablePromise<{
    data?: GetProjectListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project.list',
      query: {
        'workspace_id': workspaceId,
        'limit': limit,
        'offset': offset,
        'activity': activity,
        'disclosure': disclosure,
        'name': name,
        'page': page,
      },
    });
  }
  /**
   * Create a project
   * Creates a project in a workspace.
   * @returns any Successfully created the project.
   * @throws ApiError
   */
  public projectCreate({
    requestBody,
  }: {
    requestBody: AddProjectParam,
  }): CancelablePromise<{
    data?: AddProjectResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update a project
   * Updates an existing project in a workspace.
   * @returns any Successfully updated the project.
   * @throws ApiError
   */
  public projectUpdate({
    requestBody,
  }: {
    requestBody: PutProjectParam,
  }): CancelablePromise<{
    data?: PutProjectResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Archive/unarchive a project
   * Updates a project's archiving status.
   * @returns void
   * @throws ApiError
   */
  public projectUpdateProjectArchive({
    requestBody,
  }: {
    requestBody: UpdateProjectArchiveParam,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project.archive',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * List out project members
   * `Bot-compatible` Lists out a given number of members belonging to a project. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the members.
   * @throws ApiError
   */
  public projectUserList({
    projectId,
    limit,
    offset,
    page,
  }: {
    /**
     * The ID of the project.
     */
    projectId: string,
    /**
     * The number of members to retrieve.
     */
    limit?: number,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
    /**
     * The page number for a paginated response
     * @deprecated
     */
    page?: number,
  }): CancelablePromise<{
    data?: GetProjectUserListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project.user.list',
      query: {
        'project_id': projectId,
        'limit': limit,
        'offset': offset,
        'page': page,
      },
    });
  }
  /**
   * Invite users to a project
   * Invites users to a project.
   * @returns void
   * @throws ApiError
   */
  public postApiProjectUserInvite({
    requestBody,
  }: {
    /**
     * The users to invite and the project to invite them to.
     */
    requestBody?: {
      /**
       * The ID of the project.
       */
      project_id?: string;
      /**
       * The IDs of users.
       */
      user_ids?: Array<string>;
    },
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project.user.invite',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * List out task tags
   * `Bot-compatible` Lists out all task tags used in a project.
   *
   * Assigned to tasks of a project, tags facilitate filtering or searching
   * those tasks for viewing convenience. This method enumerates all tags
   * assigned at least once to any task of the target project.
   * @returns any Successfully retrieved the tags from the project.
   * @throws ApiError
   */
  public projectTagList({
    id,
    limit,
    offset,
  }: {
    /**
     * The ID of the project.
     */
    id: string,
    /**
     * The number of tags to retrieve.
     */
    limit?: number,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
  }): CancelablePromise<{
    data?: GetProjectTagListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project.tagList',
      query: {
        'id': id,
        'limit': limit,
        'offset': offset,
      },
    });
  }
  /**
   * List out statuses in a project
   * Lists out the list of statuses in a given project.
   * @returns any Successfully retrieved the list of statuses in a project.
   * @throws ApiError
   */
  public taskStatusList({
    projectId,
  }: {
    /**
     * The ID of the project.
     */
    projectId: string,
  }): CancelablePromise<{
    /**
     * An object wrapping a Swit resource.
     */
    data?: {
      /**
       * Statuses in the project.
       */
      status_list?: Array<StatusCustom>;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/task.status.list',
      query: {
        'project_id': projectId,
      },
    });
  }
}
