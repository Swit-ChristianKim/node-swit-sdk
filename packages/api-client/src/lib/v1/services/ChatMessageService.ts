/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateContentsParam } from '../models/CreateContentsParam';
import type { CreateContentsResponse } from '../models/CreateContentsResponse';
import type { DeleteContentsParam } from '../models/DeleteContentsParam';
import type { DeleteContentsResponse } from '../models/DeleteContentsResponse';
import type { GetContentsListResponse } from '../models/GetContentsListResponse';
import type { GetContentsResponse } from '../models/GetContentsResponse';
import type { UpdateContentsParam } from '../models/UpdateContentsParam';
import type { UpdateContentsResponse } from '../models/UpdateContentsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChatMessageService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get a chat message's information
   * Retrieves information about a chat message.
   * @returns any Successfully retrieved information about the chat message.
   * @throws ApiError
   */
  public content({
    contentsId,
    roomId,
  }: {
    /**
     * The ID of the chat message.
     */
    contentsId: string,
    /**
     * The ID of the chat.
     */
    roomId: string,
  }): CancelablePromise<{
    data?: GetContentsResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/contents.info',
      query: {
        'contents_id': contentsId,
        'room_id': roomId,
      },
    });
  }
  /**
   * List out posts
   * Lists out a given number of posts in a chat. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the chat messages.
   * @throws ApiError
   */
  public contentList({
    roomId,
    offsetOrderType,
    limit,
    parentId,
    offsetContentsId,
    offset,
  }: {
    /**
     * The ID of the chat from which to get chat messages.
     */
    roomId: string,
    /**
     * Whether older or newer chat messages than the offset are to be returned, and whether the offset item is to be included or excluded.
     * - `less`: Returns items older than the offset item.
     * - `eq_less`: Returns items older than or equal to the offset item.
     * - `greater`: Returns items newer than the offset item.
     * - `eq_greater`: Returns items newer than or equal to the offset item.
     *
     */
    offsetOrderType?: 'less' | 'eq_less' | 'greater' | 'eq_greater',
    /**
     * The number of chat messages to retrieve.
     */
    limit?: number,
    /**
     * The ID of the primary chat message for which associated comments are to be retrieved.
     */
    parentId?: string,
    /**
     * If you'd like to get chat messages older than a particular chat message, pass the ID of the baseline chat message for this parameter. If `offset` is passed, this parameter will be ignored.
     */
    offsetContentsId?: string,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
  }): CancelablePromise<{
    data?: GetContentsListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/contents.list',
      query: {
        'offset_order_type': offsetOrderType,
        'limit': limit,
        'room_id': roomId,
        'parent_id': parentId,
        'offset_contents_id': offsetContentsId,
        'offset': offset,
      },
    });
  }
  /**
   * Create a chat message
   * Creates a chat message.
   * @returns any Successfully created the chat message.
   * @throws ApiError
   */
  public contentsCreate({
    requestBody,
  }: {
    requestBody: CreateContentsParam,
  }): CancelablePromise<{
    data?: CreateContentsResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/contents.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update a chat message
   * Updates a chat message.
   * @returns any Successfully updated the chat message.
   * @throws ApiError
   */
  public contentsUpdate({
    requestBody,
  }: {
    requestBody: UpdateContentsParam,
  }): CancelablePromise<{
    data?: UpdateContentsResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/contents.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Delete a chat message
   * Deletes a chat message.
   * @returns any Successfully deleted the chat message.
   * @throws ApiError
   */
  public contentsDelete({
    requestBody,
  }: {
    requestBody: DeleteContentsParam,
  }): CancelablePromise<{
    data?: DeleteContentsResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/contents.delete',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
