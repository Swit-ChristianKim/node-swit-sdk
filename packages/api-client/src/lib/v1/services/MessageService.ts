/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddMessageReactionParam } from '../models/AddMessageReactionParam';
import type { AddMessageReactionResponse } from '../models/AddMessageReactionResponse';
import type { CreateMessageFromMailResponse } from '../models/CreateMessageFromMailResponse';
import type { CreateMessageParam } from '../models/CreateMessageParam';
import type { CreateMessageResponse } from '../models/CreateMessageResponse';
import type { DeleteMessageParam } from '../models/DeleteMessageParam';
import type { DelMessageReactionParam } from '../models/DelMessageReactionParam';
import type { GetMessageListResponse } from '../models/GetMessageListResponse';
import type { Message } from '../models/Message';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MessageService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a message's information
   * `Bot-compatible` Retrieves information about a message.
   * @param id The ID of the message.
   * @returns any Successfully retrieved information about the message.
   * @throws ApiError
   */
  public messageInfo(
    id: string,
  ): CancelablePromise<{
    data?: Message;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/message.info',
      query: {
        'id': id,
      },
    });
  }

  /**
   * List out messages
   * `Bot-compatible` Lists out a given number of messages in a channel. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @param channelId The ID of the channel from which to get messages.
   * @param limit The number of messages to retrieve.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @returns any Successfully retrieved the messages.
   * @throws ApiError
   */
  public messageList(
    channelId: string,
    limit?: number,
    offset?: string,
  ): CancelablePromise<{
    data?: GetMessageListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/message.list',
      query: {
        'limit': limit,
        'channel_id': channelId,
        'offset': offset,
      },
    });
  }

  /**
   * Create a message
   * `Bot-compatible` Creates a message in a channel.
   * @param requestBody
   * @returns any Successfully created the message.
   * @throws ApiError
   */
  public messageCreate(
    requestBody: CreateMessageParam,
  ): CancelablePromise<{
    data?: CreateMessageResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Share a message to a channel
   * Shares a message to a channel.
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public postApiMessageShare(
    requestBody?: {
      /**
       * The ID of the message.
       */
      message_id?: string;
      /**
       * The ID of the channel.
       */
      channel_id?: string;
    },
  ): CancelablePromise<{
    data?: CreateMessageFromMailResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.share',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Share a task to a channel
   * Shares a task to a channel.
   * @param requestBody
   * @returns any OK
   * @throws ApiError
   */
  public postApiMessageTaskShare(
    requestBody?: {
      /**
       * ID of the task.
       */
      task_id?: string;
      /**
       * ID of the channel.
       */
      channel_id?: string;
    },
  ): CancelablePromise<{
    data?: CreateMessageFromMailResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.taskShare',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a message
   * `Bot-compatible` Deletes a message in a channel.
   * @param requestBody
   * @returns any Successfully deleted the message.
   * @throws ApiError
   */
  public messageRemove(
    requestBody: DeleteMessageParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * React to a message
   * Adds a reaction emoji to a message.
   * @param requestBody
   * @returns any Successfully added the reaction.
   * @throws ApiError
   */
  public messageReactionCreate(
    requestBody: AddMessageReactionParam,
  ): CancelablePromise<{
    data?: AddMessageReactionResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.reaction.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove a reaction emoji from a message
   * Removes a reaction emoji from a message.
   * @param requestBody
   * @returns any Successfully removed the reaction.
   * @throws ApiError
   */
  public messageReactionRemove(
    requestBody: DelMessageReactionParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/message.reaction.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
