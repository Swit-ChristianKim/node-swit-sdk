/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetUserInfoResponse } from '../models/GetUserInfoResponse';
import type { UserPresenceSyncStatusResponse } from '../models/UserPresenceSyncStatusResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get user information
   * Retrieves the authorizing user's basic account information.
   * @returns any Successfully retrieved the user's account information.
   * @throws ApiError
   */
  public userInfo(): CancelablePromise<{
    data?: GetUserInfoResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/user.info',
    });
  }

  /**
   * Update the user's profile
   * Updates the authorizing user's profile.
   * @param requestBody
   * @returns any Successfully updated the user profile.
   * @throws ApiError
   */
  public userInfoUpdate(
    requestBody?: {
      /**
       * The name of the user.
       */
      user_name?: string;
      /**
       * Previously used in the Free/Standard plans to describe the department the user is in.
       */
      department?: string;
      /**
       * The telephone number of the user.
       */
      tel?: string;
      /**
       * The status message of the user.
       */
      msg?: string;
      /**
       * Previously used in the Free/Standard plans to describe whether to update all profiles across all workspaces the user is in.
       */
      is_update_all_profile?: boolean;
      /**
       * The fields to update. If this parameter is omitted or assigned an empty value, all fields will be updated. Fields without provided values will be set to empty or default values.
       */
      update_fields?: Array<string>;
    },
  ): CancelablePromise<{
    data?: GetUserInfoResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/user.info.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get the user's presence sync setting
   * Whether or not a `/api/presence.status.update` request can update the user's presence sync setting for your app. In UI, users can view or change this setting in User Settings > Connected apps.
   * @returns any Successfully retrieved the presence sync setting of the user.
   * @throws ApiError
   */
  public presenceSyncInfo(): CancelablePromise<{
    data?: UserPresenceSyncStatusResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/presence.sync.info',
    });
  }

  /**
   * Update the user presence
   * Updates the authorizing user's presence status.
   * @param requestBody
   * @returns any Successfully updated the user's presence status.
   * @throws ApiError
   */
  public presenceStatusUpdate(
    requestBody?: {
      /**
       * The status of the user to update to.
       */
      mode?: 'on' | 'do_not_disturb' | 'absence';
      /**
       * The duration for the Do not disturb mode.
       */
      do_not_disturb_duration?: string;
    },
  ): CancelablePromise<{
    /**
     * The presence status of the user.
     */
    mode?: 'on' | 'do_not_disturb' | 'absence';
    /**
     * Whether the user is online.
     */
    is_online?: boolean;
    /**
     * The date and time at which the Do not disturb mode started.
     */
    do_not_disturb_started_at?: string;
    /**
     * The duration for the Do not disturb mode.
     */
    do_not_disturb_duration?: string;
    /**
     * The ID of the user.
     */
    user_id?: string;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/presence.status.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Toggle presence sync
   * Set whether to allow your app to update the authorizing user's presence status via API.
   * @param requestBody
   * @returns any Successfully updated the presence sync setting of the app.
   * @throws ApiError
   */
  public presenceSyncUpdate(
    requestBody?: {
      /**
       * Whether to allow the app to update the authorizing user's presence sync.
       */
      is_presence_sync_on?: boolean;
    },
  ): CancelablePromise<{
    data?: UserPresenceSyncStatusResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/presence.sync.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

}
