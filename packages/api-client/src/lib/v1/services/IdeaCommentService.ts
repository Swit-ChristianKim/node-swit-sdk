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
   * Lists out a given number of comments on an idea. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @param ideaId The ID of the idea from which to get comments.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @param limit The number of comments to retrieve.
   * @returns any Successfully retrieved the comments.
   * @throws ApiError
   */
  public ideaCommentList(
    ideaId: string,
    offset?: string,
    limit?: number,
  ): CancelablePromise<{
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
   * Posts a comment on an idea.
   * @param requestBody
   * @returns any Successfully commented on the idea.
   * @throws ApiError
   */
  public ideaCommentCreate(
    requestBody: CreateIdeaCommentParam,
  ): CancelablePromise<{
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
   * Deletes a comment on an idea.
   * @param requestBody
   * @returns any Successfully deleted the comment.
   * @throws ApiError
   */
  public ideaCommentRemove(
    requestBody: DelIdeaCommentParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/idea.comment.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
