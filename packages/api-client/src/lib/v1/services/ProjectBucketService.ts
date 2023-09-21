/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddProjectBucketParam } from '../models/AddProjectBucketParam';
import type { AddProjectBucketResponse } from '../models/AddProjectBucketResponse';
import type { GetProjectBucketInfoResponse } from '../models/GetProjectBucketInfoResponse';
import type { GetProjectBucketListResponse } from '../models/GetProjectBucketListResponse';
import type { PutProjectBucketParam } from '../models/PutProjectBucketParam';
import type { PutProjectBucketResponse } from '../models/PutProjectBucketResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectBucketService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a task bucket's information
   * Retrieves information about a task bucket.
   * @param projectId The ID of the project that contains the bucket.
   * @param id The ID of the bucket the task is in.
   * @returns any Successfully retrieved the bucket's information.
   * @throws ApiError
   */
  public projectBucketInfo(
    projectId: string,
    id: string,
  ): CancelablePromise<{
    data?: GetProjectBucketInfoResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project.bucket.info',
      query: {
        'project_id': projectId,
        'id': id,
      },
    });
  }

  /**
   * List out task buckets
   * Lists out all task buckets from a project.
   * @param projectId The ID of the project.
   * @param limit The number of buckets to retrieve.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @returns any Successfully retrieved the buckets.
   * @throws ApiError
   */
  public projectBucketList(
    projectId: string,
    limit?: number,
    offset?: string,
  ): CancelablePromise<{
    data?: GetProjectBucketListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/project.bucket.list',
      query: {
        'project_id': projectId,
        'limit': limit,
        'offset': offset,
      },
    });
  }

  /**
   * Add a task bucket
   * Adds a task bucket in a project.
   * @param requestBody
   * @returns any Successfully added the bucket.
   * @throws ApiError
   */
  public projectBucketCreate(
    requestBody: AddProjectBucketParam,
  ): CancelablePromise<{
    data?: AddProjectBucketResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project.bucket.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update a task bucket
   * Updates the title of an existing task bucket in a project.
   * @param requestBody
   * @returns any Successfully updated the bucket.
   * @throws ApiError
   */
  public projectBucketUpdate(
    requestBody: PutProjectBucketParam,
  ): CancelablePromise<{
    data?: PutProjectBucketResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/project.bucket.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
