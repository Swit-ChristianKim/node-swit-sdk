/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateMessageCommentParam } from '../models/CreateMessageCommentParam';
import type { CreateMessageCommentResponse } from '../models/CreateMessageCommentResponse';
import type { DeleteMessageCommentParam } from '../models/DeleteMessageCommentParam';
import type { GetMessageCommentListResponse } from '../models/GetMessageCommentListResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MessageCommentService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List out message comments
   * Lists out a given number of comments on a message. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @param messageId The ID of the message from which to get comments.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @param limit The number of comments to retrieve.
   * @returns any Successfully retrieved the comments.
   * @throws ApiError
   */
  public messageCommentList(
    messageId: string,
    offset?: string,
    limit?: number,
  ): CancelablePromise<{
    data?: GetMessageCommentListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/message.comment.list',
      query: {
        'message_id': messageId,
        'offset': offset,
        'limit': limit,
      },
    });
  }

  /**
   * Comment on a message
   * Posts a comment on a message.
   * @param requestBody
   * @returns any Successfully commented on the message.
   * @throws ApiError
   */
  public messageCommentCreate(
    requestBody: CreateMessageCommentParam,
  ): CancelablePromise<{
    data?: CreateMessageCommentResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.comment.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a message comment
   * Deletes a comment on a message.
   * @param requestBody
   * @returns any Successfully deleted the comment.
   * @throws ApiError
   */
  public messageCommentRemove(
    requestBody: DeleteMessageCommentParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.comment.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * React to a message comment
   * Adds a reaction emoji to a message's comment.
   * @param requestBody
   * @returns void
   * @throws ApiError
   */
  public postApiMessageCommentReactionCreate(
    requestBody?: {
      /**
       * The ID of the comment to react to.
       */
      comment_id?: string;
      /**
       * The key value of the reaction.
       */
      reaction_value?: string;
    },
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.comment.reactionCreate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
