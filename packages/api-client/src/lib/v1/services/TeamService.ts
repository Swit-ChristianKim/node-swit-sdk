/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetUserTeamListResponse } from '../models/GetUserTeamListResponse';
import type { TeamCreateResponse } from '../models/TeamCreateResponse';
import type { TeamDeleteResponse } from '../models/TeamDeleteResponse';
import type { TeamSortParam } from '../models/TeamSortParam';
import type { TeamUpdateResponse } from '../models/TeamUpdateResponse';
import type { TeamUserCreateResponse } from '../models/TeamUserCreateResponse';
import type { TeamUserDeleteResponse } from '../models/TeamUserDeleteResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class TeamService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List out teams
   * `Bot-compatible` List out the child teams of a given team. If no parameters are passed, the list of all teams in the organization is given as a response.
   * @returns any Successfully retrieved the list of teams.
   * @throws ApiError
   */
  public userTeamList({
    directChildrenOnly,
    parentId,
  }: {
    /**
     * Whether to list out only direct child teams of the given parent.
     */
    directChildrenOnly?: boolean,
    /**
     * The ID of the parent team.
     */
    parentId?: string,
  }): CancelablePromise<{
    data?: GetUserTeamListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/user.team.list',
      query: {
        'direct_children_only': directChildrenOnly,
        'parent_id': parentId,
      },
    });
  }

  /**
   * Create a team
   * `Bot-compatible` Creates a new team in the organization.
   * @returns any Successfully created the team.
   * @throws ApiError
   */
  public teamCreate({
    requestBody,
  }: {
    requestBody?: {
      /**
       * The name of the team to create.
       */
      name: string;
      /**
       * The ID of the parent team under which the new team will be created. To create a new team directly under the organization (not as a subteam), use the organization's team ID. Note that this is different from the organization ID.
       */
      parent_id: string;
      /**
       * Custom text to be used as a reference. This is useful to store information from another source.
       */
      reference?: string;
    },
  }): CancelablePromise<{
    data?: TeamCreateResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/team.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update a team
   * `Bot-compatible` Updates a team's information including its name and parent team.
   * @returns any Successfully updated the team's information.
   * @throws ApiError
   */
  public teamUpdate({
    requestBody,
  }: {
    requestBody?: {
      /**
       * The ID of the team to update.
       */
      id: string;
      /**
       * Custom text to be used as a reference. This is useful to store information from another source.
       */
      reference?: string;
      /**
       * The name of the team to update.
       */
      name?: string;
      /**
       * The ID of the new parent team for the team being updated.
       */
      parent_id?: string;
    },
  }): CancelablePromise<{
    data?: TeamUpdateResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/team.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a team
   * `Bot-compatible` Deletes a team.
   * @returns any Successfully deleted the team.
   * @throws ApiError
   */
  public teamDelete({
    requestBody,
  }: {
    requestBody?: {
      /**
       * The ID of the team to delete.
       */
      id: string;
    },
  }): CancelablePromise<{
    data?: TeamDeleteResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/team.delete',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Sort teams
   * Sort the child teams of a parent team in a given order.
   * @returns any Successfully sorted the teams.
   * @throws ApiError
   */
  public teamSort({
    requestBody,
  }: {
    requestBody: TeamSortParam,
  }): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/team.sort',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Add users to a team
   * `Bot-compatible` Adds users to a team.
   * @returns any Successfully added the users to the selected team.
   * @throws ApiError
   */
  public teamUserAdd({
    requestBody,
  }: {
    requestBody?: {
      /**
       * The IDs of the users to add.
       */
      user_ids?: Array<string>;
      /**
       * The ID of the team to add the users to.
       */
      id?: string;
    },
  }): CancelablePromise<{
    data?: TeamUserCreateResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/team.user.add',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update a user's primary team
   * `Bot-compatible` Updates a user's primary team.
   * @returns void
   * @throws ApiError
   */
  public teamUserPrimaryUpdate({
    requestBody,
  }: {
    requestBody?: {
      /**
       * The ID of the team to designate as the primary team.
       */
      id: string;
      /**
       * The ID of the user.
       */
      user_id: string;
    },
  }): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/team.user.primary.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove team members
   * `Bot-compatible` Removes members from a team.
   * @returns any Successfully removed the members from the team.
   * @throws ApiError
   */
  public teamUserRemove({
    requestBody,
  }: {
    /**
     * The members to remove from the team.
     */
    requestBody?: {
      /**
       * The ID of the team to remove the members from.
       */
      id: string;
      /**
       * The IDs of the members to remove.
       */
      user_ids: Array<string>;
    },
  }): CancelablePromise<{
    data?: TeamUserDeleteResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/team.user.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
