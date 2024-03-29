/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateRoomParam } from '../models/CreateRoomParam';
import type { CreateRoomResponse } from '../models/CreateRoomResponse';
import type { GetRoomListResponse } from '../models/GetRoomListResponse';
import type { GetRoomResponse } from '../models/GetRoomResponse';
import type { InviteRoomParam } from '../models/InviteRoomParam';
import type { InviteRoomResponse } from '../models/InviteRoomResponse';
import type { LeaveRoomParam } from '../models/LeaveRoomParam';
import type { LeaveRoomResponse } from '../models/LeaveRoomResponse';
import type { UpdateRoomParam } from '../models/UpdateRoomParam';
import type { UpdateRoomResponse } from '../models/UpdateRoomResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChatService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Get a chat's information
   * Retrieves information about a chat.
   * @returns any Successfully retrieved the chat's information.
   * @throws ApiError
   */
  public roomInfo({
    roomId,
    targetUserId,
  }: {
    /**
     * The ID of the chat.
     */
    roomId: string,
    /**
     * The user ID of the chat target.
     */
    targetUserId?: string,
  }): CancelablePromise<{
    data?: GetRoomResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/room.info',
      query: {
        'room_id': roomId,
        'target_user_id': targetUserId,
      },
    });
  }
  /**
   * List out chats
   * Lists out a given number of chats. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the chats.
   * @throws ApiError
   */
  public roomList({
    offsetOrderType,
    limit,
    filter,
    search,
    page,
    offset,
  }: {
    /**
     * Whether older or newer chat messages than the offset are to be returned, and whether the offset item is to be included or excluded.
     *
     * - `less`: Returns items older than the offset item, excluding the offset item.
     * - `eq_less`: Returns items older than or equal to the offset item, including the offset item.
     * - `greater`: Returns items newer than the offset item, excluding the offset item.
     * - `eq_greater`: Returns items newer than or equal to the offset item, including the offset item.
     *
     */
    offsetOrderType?: 'less' | 'eq_less' | 'greater' | 'eq_greater',
    /**
     * The number of chats to retrieve.
     */
    limit?: number,
    /**
     * The filter of the chat list.
     */
    filter?: 'all' | 'starred' | 'unread',
    /**
     * The search keyword to filter the list by.
     */
    search?: string,
    /**
     * The page number for a paginated response.
     * @deprecated
     */
    page?: number,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
  }): CancelablePromise<{
    data?: GetRoomListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/room.list',
      query: {
        'offset_order_type': offsetOrderType,
        'limit': limit,
        'filter': filter,
        'search': search,
        'page': page,
        'offset': offset,
      },
    });
  }
  /**
   * Create a chat
   * Creates a new chat. If a 1:1 chat with the specified member already exists, the response will not create a duplicate but instead return the existing chat's information. For group chats with specified members, a new chat will be created even if one already exists with the same members.
   * @returns any Successfully created the chat.
   * @throws ApiError
   */
  public roomCreate({
    requestBody,
  }: {
    requestBody: CreateRoomParam,
  }): CancelablePromise<{
    data?: CreateRoomResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/room.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update a chat
   * Updates an existing chat.
   * @returns any Successfully updated the chat.
   * @throws ApiError
   */
  public roomUpdate({
    requestBody,
  }: {
    requestBody: UpdateRoomParam,
  }): CancelablePromise<{
    data?: UpdateRoomResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/room.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Leave a chat
   * The use leaves a chat.
   * @returns any Successfully left the chat.
   * @throws ApiError
   */
  public roomLevae({
    requestBody,
  }: {
    requestBody: LeaveRoomParam,
  }): CancelablePromise<{
    data?: LeaveRoomResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/room.leave',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Invite people
   * Invites people to a chat.
   * @returns any Successfully invited people to the chat.
   * @throws ApiError
   */
  public roomInvite({
    requestBody,
  }: {
    requestBody: InviteRoomParam,
  }): CancelablePromise<{
    data?: InviteRoomResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/room.invite',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
