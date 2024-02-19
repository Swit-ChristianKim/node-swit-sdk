/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddChannelParam } from '../models/AddChannelParam';
import type { AddChannelResponse } from '../models/AddChannelResponse';
import type { AddChannelUserInviteParam } from '../models/AddChannelUserInviteParam';
import type { DelChannelUserParam } from '../models/DelChannelUserParam';
import type { GetChannelListResponse } from '../models/GetChannelListResponse';
import type { GetChannelResponse } from '../models/GetChannelResponse';
import type { GetChannelUserListResponse } from '../models/GetChannelUserListResponse';
import type { PutChannelParam } from '../models/PutChannelParam';
import type { PutChannelResponse } from '../models/PutChannelResponse';
import type { UpdateChannelArchiveParam } from '../models/UpdateChannelArchiveParam';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ChannelService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get a channel's information
   * `Bot-compatible` Retrieves information about a channel.
   * @returns any Successfully retrieved the channel's information.
   * @throws ApiError
   */
  public channelInfo({
    id,
  }: {
    /**
     * The ID of the channel.
     */
    id: string,
  }): CancelablePromise<{
    data?: GetChannelResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/channel.info',
      query: {
        'id': id,
      },
    });
  }

  /**
   * List out channels
   * Lists out a given number of channels from a workspace. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the channels.
   * @throws ApiError
   */
  public channelList({
    workspaceId,
    activity,
    disclosure,
    type,
    name,
    page,
    limit,
    offset,
  }: {
    /**
     * The ID of the workspace.
     */
    workspaceId: string,
    /**
     * Filter the list by whether the channel is active (`act`) or archived (`arch`). You can select a comma-delimited list of multiple property filters. If not passed, both filters will be selected.
     */
    activity?: string,
    /**
     * Filter the list by whether the channel is pubic (`pub`) or private (`pri`). You can select a comma-delimited list of multiple property filters. If not passed, both filters will be selected.
     */
    disclosure?: string,
    /**
     * Filter the list by channel type.
     *
     * - `dfl`: The channel is the default chat room joined by all workspace members.
     * - `gen`: The channel is an additionally created group chat.
     *
     * You can select a comma-delimited list of multiple type filters. If not passed, all filters will be selected.
     */
    type?: string,
    /**
     * The name of the channel.
     */
    name?: string,
    /**
     * The page number for a paginated response.
     * @deprecated
     */
    page?: number,
    /**
     * The number of channels to retrieve.
     */
    limit?: number,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
  }): CancelablePromise<{
    data?: GetChannelListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/channel.list',
      query: {
        'activity': activity,
        'disclosure': disclosure,
        'type': type,
        'name': name,
        'page': page,
        'workspace_id': workspaceId,
        'limit': limit,
        'offset': offset,
      },
    });
  }

  /**
   * Create a channel
   * Creates a new channel in a workspace.
   * @returns any Successfully created the channel.
   * @throws ApiError
   */
  public channelCreate({
    requestBody,
  }: {
    requestBody: AddChannelParam,
  }): CancelablePromise<{
    data?: AddChannelResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/channel.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update a channel
   * Updates an existing channel.
   * @returns any Successfully updated the channel.
   * @throws ApiError
   */
  public channelUpdate({
    requestBody,
  }: {
    requestBody: PutChannelParam,
  }): CancelablePromise<{
    data?: PutChannelResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/channel.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * List out channel members
   * `Bot-compatible` Lists out a given number of members belonging to a channel. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the channel members.
   * @throws ApiError
   */
  public channelUserList({
    channelId,
    offset,
    page,
    limit,
  }: {
    /**
     * The ID of the channel.
     */
    channelId: string,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
    /**
     * The page number for a paginated response
     * @deprecated
     */
    page?: number,
    /**
     * The number of members to retrieve.
     */
    limit?: number,
  }): CancelablePromise<{
    data?: GetChannelUserListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/channel.user.list',
      query: {
        'offset': offset,
        'page': page,
        'channel_id': channelId,
        'limit': limit,
      },
    });
  }

  /**
   * Invite a user to the channel
   * Invites a user to a channel.
   * @returns any Successfully invited the users to the channel.
   * @throws ApiError
   */
  public channelAddChannelUserInvite({
    requestBody,
  }: {
    requestBody: AddChannelUserInviteParam,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/channel.user.invite',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove users from a channel
   * Removes users from a channel
   * @returns any Successfully removed the users from the channel
   * @throws ApiError
   */
  public channelDelChannelUser({
    requestBody,
  }: {
    requestBody: DelChannelUserParam,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/channel.user.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Archive/unarchive a channel
   * Updates a channel's archiving status.
   * @returns void
   * @throws ApiError
   */
  public channelUpdateChannelArchive({
    requestBody,
  }: {
    requestBody: UpdateChannelArchiveParam,
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/channel.archive',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
