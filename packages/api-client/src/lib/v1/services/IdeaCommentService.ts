/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateIdeaCommentParam } from '../models/CreateIdeaCommentParam';
import type { CreateIdeaCommentResponse } from '../models/CreateIdeaCommentResponse';
import type { DelIdeaCommentParam } from '../models/DelIdeaCommentParam';
import type { GetIdeaCommentListResponse } from '../models/GetIdeaCommentListResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IdeaCommentService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List out idea comments
   * `Bot-compatible` Lists out a given number of comments on an idea. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the comments.
   * @throws ApiError
   */
  public ideaCommentList({
    ideaId,
    offset,
    limit,
  }: {
    /**
     * The ID of the idea from which to get comments.
     */
    ideaId: string,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
    /**
     * The number of comments to retrieve.
     */
    limit?: number,
  }): CancelablePromise<{
    data?: GetIdeaCommentListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/idea.comment.list',
      query: {
        'offset': offset,
        'limit': limit,
        'idea_id': ideaId,
      },
    });
  }

  /**
   * Comment on an idea
   * `Bot-compatible` Posts a comment on an idea.
   * @returns any Successfully commented on the idea.
   * @throws ApiError
   */
  public ideaCommentCreate({
    requestBody,
  }: {
    requestBody: CreateIdeaCommentParam,
  }): CancelablePromise<{
    data?: CreateIdeaCommentResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/idea.comment.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete an idea comment
   * `Bot-compatible` Deletes a comment on an idea.
   * @returns any Successfully deleted the comment.
   * @throws ApiError
   */
  public ideaCommentRemove({
    requestBody,
  }: {
    requestBody: DelIdeaCommentParam,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/idea.comment.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
