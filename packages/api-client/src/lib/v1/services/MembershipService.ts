/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCompanyUserListParam } from '../models/AddCompanyUserListParam';
import type { DelCompanyUserResponse } from '../models/DelCompanyUserResponse';
import type { GetOrganizationUserListResponse } from '../models/GetOrganizationUserListResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MembershipService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get user information
   * Retrieves information of a user in the organization.
   * @param userId The ID of the user to retrieve.
   * @returns any Successfully retrieved the user information.
   * @throws ApiError
   */
  public organizationUserInfo(
    userId: string,
  ): CancelablePromise<{
    data?: {
      user?: Array<GetOrganizationUserListResponse>;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/organization.user.info',
      query: {
        'user_id': userId,
      },
    });
  }

  /**
   * Get user list
   * `Bot-compatible` Retrieves a list of users in the organization.
   * @param cnt The number of users to return per page.
   * @param page The page number for a paginated response.
   * @param teamId The ID of the team to filter users by.
   * @param wsId The ID of the workspace to filter users by.
   * @param keyword This parameter filters users based on the provided keyword in their names or email addresses.
   * @param filtersMembershipStatus The membership status to filter the users by.
   * @returns any Successfully retrieved the user list from the organization.
   * @throws ApiError
   */
  public organizationUserList(
    cnt: number,
    page?: number,
    teamId?: string,
    wsId?: string,
    keyword?: string,
    filtersMembershipStatus?: 'active' | 'inactive',
  ): CancelablePromise<{
    data?: {
      total_rows?: number;
      /**
       * An object wrapping a Swit resource.
       */
      users?: Array<GetOrganizationUserListResponse>;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/organization.user.list',
      query: {
        'page': page,
        'team_id': teamId,
        'ws_id': wsId,
        'keyword': keyword,
        'filters.membership_status': filtersMembershipStatus,
        'cnt': cnt,
      },
    });
  }

  /**
   * Create a user
   * Creates a user in the organization.
   * @param requestBody
   * @returns any Successfully created the user.
   * @throws ApiError
   */
  public organizationUserCreate(
    requestBody?: {
      /**
       * The language setting for the user to create.
       */
      language?: 'en' | 'ko';
      /**
       * The timezone of the user to create.
       */
      timezone?: string;
      /**
       * The name of the user to create.
       */
      user_name: string;
      /**
       * The email of the user to create.
       */
      user_email: string;
      /**
       * The telephone number of the user to create.
       */
      tel?: string;
      /**
       * The status message of the user to create.
       */
      msg?: string;
    },
  ): CancelablePromise<{
    data?: GetOrganizationUserListResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/organization.user.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @deprecated
   * Create guest accounts
   * Invites multiple users as guests to the organization.
   *
   * > Calling this endpoint to create a user will not trigger an event notification for subscribers to the user creation event.
   * @param requestBody
   * @returns any Successfully created the guest accounts.
   * @throws ApiError
   */
  public userOrganizationBatchCreate(
    requestBody: AddCompanyUserListParam,
  ): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/user.organization.batchCreate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Activate a user
   * `Bot-compatible` Activates a user in an organization.
   * @param requestBody The user to activate.
   * @returns void
   * @throws ApiError
   */
  public organizationUserActivate(
    requestBody?: {
      /**
       * The ID of the user to activate.
       */
      user_id: string;
    },
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/organization.user.activate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Deactivate a user
   * `Bot-compatible` Deactivates a user in the organization.
   * @param requestBody The user to deactivate.
   * @returns void
   * @throws ApiError
   */
  public organizationUserDeactivate(
    requestBody?: {
      /**
       * The ID of the user to deactivate.
       */
      user_id: string;
    },
  ): CancelablePromise<void> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/organization.user.deactivate',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a user
   * `Bot-compatible` Deletes a user from the organization.
   * @param requestBody
   * @returns any Successfully deleted the user.
   * @throws ApiError
   */
  public organizationUserRemove(
    requestBody?: {
      /**
       * The ID of the user to delete from the organization.
       */
      user_id: string;
    },
  ): CancelablePromise<{
    data?: DelCompanyUserResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/organization.user.remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
