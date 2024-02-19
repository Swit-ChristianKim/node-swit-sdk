/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddTaskCheckListParam } from '../models/AddTaskCheckListParam';
import type { AddTaskCheckListResponse } from '../models/AddTaskCheckListResponse';
import type { DelTaskCheckListParam } from '../models/DelTaskCheckListParam';
import type { GetTaskCheckListListResponse } from '../models/GetTaskCheckListListResponse';
import type { GetTaskCheckListResponse } from '../models/GetTaskCheckListResponse';
import type { PutTaskCheckListParam } from '../models/PutTaskCheckListParam';
import type { PutTaskCheckListResponse } from '../models/PutTaskCheckListResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TaskChecklistService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Add a checklist item
   * `Bot-compatible` Adds an item to a task's checklist.
   * @returns any Successfully added the item to the checklist.
   * @throws ApiError
   */
  public taskChecklistCreate({
    requestBody,
  }: {
    requestBody: AddTaskCheckListParam,
  }): CancelablePromise<{
    data?: AddTaskCheckListResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.checklist.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get a checklist item's information
   * `Bot-compatible` Retrieves information about a checklist item in a task.
   * @returns any Successfully retrieved information about the checklist item.
   * @throws ApiError
   */
  public taskChecklistInfo({
    id,
  }: {
    /**
     * The ID of the checklist item.
     */
    id: string,
  }): CancelablePromise<{
    data?: GetTaskCheckListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/task.checklist.info',
      query: {
        'id': id,
      },
    });
  }

  /**
   * List out checklist items
   * `Bot-compatible` Lists out a given number of items from a task's checklist. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved items from the checklist.
   * @throws ApiError
   */
  public taskChecklistList({
    taskId,
    offset,
    limit,
  }: {
    /**
     * The ID of the task.
     */
    taskId: string,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
    /**
     * The number of checklist items to retrieve.
     */
    limit?: number,
  }): CancelablePromise<{
    data?: GetTaskCheckListListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/task.checklist.list',
      query: {
        'offset': offset,
        'task_id': taskId,
        'limit': limit,
      },
    });
  }

  /**
   * Delete a checklist item
   * `Bot-compatible` Deletes an item in a task's checklist.
   * @returns any Successfully deleted the checklist item.
   * @throws ApiError
   */
  public taskChecklistRemove({
    requestBody,
  }: {
    requestBody: DelTaskCheckListParam,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.checklist.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update a checklist item
   * `Bot-compatible` Updates an existing item of a task's checklist.
   * @returns any Successfully updated the checklist item.
   * @throws ApiError
   */
  public taskChecklistUpdate({
    requestBody,
  }: {
    requestBody: PutTaskCheckListParam,
  }): CancelablePromise<{
    data?: PutTaskCheckListResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/task.checklist.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
