/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddTaskCommentParam } from '../models/AddTaskCommentParam';
import type { AddTaskCommentResponse } from '../models/AddTaskCommentResponse';
import type { DelTaskCommentParam } from '../models/DelTaskCommentParam';
import type { GetTaskCommentResponse } from '../models/GetTaskCommentResponse';
import type { PutTaskCommentParam } from '../models/PutTaskCommentParam';
import type { PutTaskCommentResponse } from '../models/PutTaskCommentResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaskCommentService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Comment on a task
   * `Bot-compatible` Posts a comment on a task.
   * @param requestBody
   * @returns any Successfully commented on the task.
   * @throws ApiError
   */
  public taskCommentCreate(
    requestBody: AddTaskCommentParam,
  ): CancelablePromise<{
    data?: AddTaskCommentResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.comment.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * List out task comments
   * `Bot-compatible` Lists out a given number of comments on a task. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @param taskId The ID of the task.
   * @param offset The ordinal number of the page of comments to return.
   * @param bodyType Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   * @param limit The number of comments to retrieve.
   * @returns any Successfully retrieved the comments.
   * @throws ApiError
   */
  public taskCommentList(
    taskId: string,
    offset?: string,
    bodyType: 'plain' | 'json_string' = 'plain',
    limit?: number,
  ): CancelablePromise<{
    data?: GetTaskCommentResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/task.comment.list',
      query: {
        'offset': offset,
        'body_type': bodyType,
        'task_id': taskId,
        'limit': limit,
      },
    });
  }

  /**
   * Delete a task comment
   * `Bot-compatible` Deletes a comment on a task.
   * @param requestBody
   * @returns any Successfully deleted the comment.
   * @throws ApiError
   */
  public taskCommentRemove(
    requestBody: DelTaskCommentParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.comment.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Edit a task comment
   * `Bot-compatible` Edits a comment on a task.
   * @param requestBody
   * @returns any Successfully edited the comment.
   * @throws ApiError
   */
  public taskCommentUpdate(
    requestBody: PutTaskCommentParam,
  ): CancelablePromise<{
    data?: PutTaskCommentResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.comment.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
