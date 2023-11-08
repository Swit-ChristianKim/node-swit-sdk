/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddIdeaReactionParam } from '../models/AddIdeaReactionParam';
import type { AddIdeaReactionResponse } from '../models/AddIdeaReactionResponse';
import type { CreateIdeaParam } from '../models/CreateIdeaParam';
import type { CreateIdeaResponse } from '../models/CreateIdeaResponse';
import type { DelIdeaParam } from '../models/DelIdeaParam';
import type { DelIdeaReactionParam } from '../models/DelIdeaReactionParam';
import type { GetIdeaListResponse } from '../models/GetIdeaListResponse';
import type { GetIdeaResponse } from '../models/GetIdeaResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class IdeaService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get an idea's information
   * Retrieves information about an idea.
   * @param id The ID of the idea.
   * @returns any Successfully retrieved information about the idea.
   * @throws ApiError
   */
  public ideaInfo(
    id: string,
  ): CancelablePromise<{
    data?: GetIdeaResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/idea.info',
      query: {
        'id': id,
      },
    });
  }

  /**
   * List out ideas
   * Lists out a given number of ideas in a channel. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @param channelId The ID of the channel from which to get posts.
   * @param offset Pass the `offset` string returned by the previous call to skip already returned entries.
   * @param limit The number of posts to retrieve.
   * @returns any Successfully retrieved the ideas.
   * @throws ApiError
   */
  public ideaList(
    channelId: string,
    offset?: string,
    limit?: number,
  ): CancelablePromise<{
    data?: GetIdeaListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/idea.list',
      query: {
        'channel_id': channelId,
        'offset': offset,
        'limit': limit,
      },
    });
  }

  /**
   * Create an idea
   * Creates a idea in a channel.
   * @param requestBody
   * @returns any Successfully created the idea.
   * @throws ApiError
   */
  public ideaCreate(
    requestBody: CreateIdeaParam,
  ): CancelablePromise<{
    data?: CreateIdeaResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/idea.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete an idea
   * Deletes an idea in a channel.
   * @param requestBody
   * @returns any Successfully deleted the idea.
   * @throws ApiError
   */
  public ideaRemove(
    requestBody: DelIdeaParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/idea.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * React to an idea
   * Adds a reaction emoji to an idea.
   * @param requestBody
   * @returns any Successfully added the reaction.
   * @throws ApiError
   */
  public ideaReactionCreate(
    requestBody: AddIdeaReactionParam,
  ): CancelablePromise<{
    data?: AddIdeaReactionResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/idea.reaction.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove a reaction emoji from an idea
   * Removes a reaction emoji from an idea.
   * @param requestBody
   * @returns any Successfully removed the reaction.
   * @throws ApiError
   */
  public ideaReactionRemove(
    requestBody: DelIdeaReactionParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/idea.reaction.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
