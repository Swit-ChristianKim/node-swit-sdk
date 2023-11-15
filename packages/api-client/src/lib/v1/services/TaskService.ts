/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddTaskAssigneeParam } from '../models/AddTaskAssigneeParam';
import type { AddTaskAssigneeResponse } from '../models/AddTaskAssigneeResponse';
import type { AddTaskFollowParam } from '../models/AddTaskFollowParam';
import type { AddTaskFollowResponse } from '../models/AddTaskFollowResponse';
import type { AddTaskParam } from '../models/AddTaskParam';
import type { AddTaskResponse } from '../models/AddTaskResponse';
import type { AppendAssetTaskParam } from '../models/AppendAssetTaskParam';
import type { DelTaskAssigneeParam } from '../models/DelTaskAssigneeParam';
import type { DelTaskFollowParam } from '../models/DelTaskFollowParam';
import type { DelTaskParam } from '../models/DelTaskParam';
import type { GetTaskInfoResponse } from '../models/GetTaskInfoResponse';
import type { GetTaskListByColumnResponse } from '../models/GetTaskListByColumnResponse';
import type { GetTaskListMineResponse } from '../models/GetTaskListMineResponse';
import type { GetTaskListProjectResponse } from '../models/GetTaskListProjectResponse';
import type { MoveTaskParam } from '../models/MoveTaskParam';
import type { MoveTaskResponse } from '../models/MoveTaskResponse';
import type { PutTaskParam } from '../models/PutTaskParam';
import type { PutTaskResponse } from '../models/PutTaskResponse';
import type { TaskResponse } from '../models/TaskResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaskService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a task's information
   * `Bot-compatible` Retrieves information about a task.
   * @param id The ID of the task.
   * @param bodyType Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   * @returns any Successfully retrieved the task's information.
   * @throws ApiError
   */
  public taskInfo(
    id: string,
    bodyType: 'plain' | 'json_string' = 'plain',
  ): CancelablePromise<{
    data?: GetTaskInfoResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/task.info',
      query: {
        'id': id,
        'body_type': bodyType,
      },
    });
  }

  /**
   * List out tasks
   * `Bot-compatible` Lists out a given number of tasks from a project. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @param projectId The ID of the project. To get the Personal tasks that are visible only to you, pass `mytask`.
   * @param workspaceId The ID of the workspace that includes the target project. Only required when `mytask` is passed to the `project_id` parameter (to get the Personal tasks).
   * @param limit The number of tasks to retrieve.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @param parentId The ID of the parent task.
   * @returns any Successfully retrieved the tasks.
   * @throws ApiError
   */
  public taskList(
    projectId: string,
    workspaceId?: string,
    limit?: number,
    offset?: string,
    parentId?: string,
  ): CancelablePromise<{
    data?: GetTaskListProjectResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/task.list',
      query: {
        'workspace_id': workspaceId,
        'project_id': projectId,
        'limit': limit,
        'offset': offset,
        'parent_id': parentId,
      },
    });
  }

  /**
   * List out tasks by bucket
   * `Bot-compatible` Lists out a given number of tasks from a bucket. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @param projectId The ID of the project.
   * @param bucketId The ID of the task bucket.
   * @param limit The number of tasks to retrieve.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @returns any Successfully retrieved the tasks.
   * @throws ApiError
   */
  public taskListByColumn(
    projectId: string,
    bucketId: string,
    limit?: number,
    offset?: string,
  ): CancelablePromise<{
    data?: GetTaskListByColumnResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/task.listByColumn',
      query: {
        'project_id': projectId,
        'bucket_id': bucketId,
        'limit': limit,
        'offset': offset,
      },
    });
  }

  /**
   * List out my tasks
   * `Bot-compatible` Lists out "my tasks" of the user from a workspace.
   * @param workspaceId The ID of the workspace.
   * @param limit The number of tasks to retrieve.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @returns any Successfully retrieved my tasks.
   * @throws ApiError
   */
  public taskMyTaskList(
    workspaceId: string,
    limit?: number,
    offset?: string,
  ): CancelablePromise<{
    data?: GetTaskListMineResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/task.myTaskList',
      query: {
        'workspace_id': workspaceId,
        'limit': limit,
        'offset': offset,
      },
    });
  }

  /**
   * Create a task
   * `Bot-compatible` Creates a task in a project.
   * @param requestBody
   * @returns any Successfully posted the task.
   * @throws ApiError
   */
  public taskCreate(
    requestBody: AddTaskParam,
  ): CancelablePromise<{
    data?: AddTaskResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a task
   * `Bot-compatible` Deletes a task from a project.
   * @param requestBody
   * @returns any Successfully deleted the task.
   * @throws ApiError
   */
  public taskRemove(
    requestBody: DelTaskParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Move a task
   * `Bot-compatible` Moves a task into another project.
   * @param requestBody
   * @returns any Successfully moved the task.
   * @throws ApiError
   */
  public taskMove(
    requestBody: MoveTaskParam,
  ): CancelablePromise<{
    data?: MoveTaskResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.move',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update a task
   * `Bot-compatible` Updates a task in a project.
   * @param requestBody
   * @returns any Successfully updated the task.
   * @throws ApiError
   */
  public taskUpdate(
    requestBody: PutTaskParam,
  ): CancelablePromise<{
    data?: PutTaskResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Add an assignee
   * `Bot-compatible` Adds an assignee to a task.
   * @param requestBody
   * @returns any Successfully added an assignee for the task.
   * @throws ApiError
   */
  public taskAssigneeAdd(
    requestBody: AddTaskAssigneeParam,
  ): CancelablePromise<{
    data?: AddTaskAssigneeResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.assignee.add',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove an assignee
   * `Bot-compatible` Removes a member from the managing role for a task.
   * @param requestBody
   * @returns any Successfully removed the assignee.
   * @throws ApiError
   */
  public taskAssigneeRemove(
    requestBody: DelTaskAssigneeParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.assignee.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Add a collaborator
   * `Bot-compatible` Adds a collaborator to a task.
   * @param requestBody
   * @returns any Successfully added the collaborator.
   * @throws ApiError
   */
  public taskFollowAdd(
    requestBody: AddTaskFollowParam,
  ): CancelablePromise<{
    data?: AddTaskFollowResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.follow.add',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove a collaborator
   * `Bot-compatible` Removes a collaborator from a task.
   * @param requestBody
   * @returns any Successfully removed the collaborator.
   * @throws ApiError
   */
  public taskFollowRemove(
    requestBody: DelTaskFollowParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.follow.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update the status of a task
   * Updates the status of a task.
   * @param requestBody
   * @returns TaskResponse Successfully updated the status of the task.
   * @throws ApiError
   */
  public taskStatusUpdate(
    requestBody: {
      /**
       * The ID of the task.
       */
      task_id?: string;
      /**
       * The ID of the project.
       */
      project_id?: string;
      /**
       * The ID of the workspace.
       */
      workspace_id?: string;
      /**
       * The ID of the custom status to update to.
       */
      to_status_id?: string;
    },
  ): CancelablePromise<TaskResponse> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.status.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Add attachments
   * Adds file attachments to a task.
   * @param requestBody
   * @returns any Successfully added the attachments to the task.
   * @throws ApiError
   */
  public taskAssetAppend(
    requestBody: AppendAssetTaskParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.asset.append',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
