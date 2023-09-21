/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamUser } from './TeamUser';

/**
 * An object wrapping a Swit resource.
 */
export type GetOrganizationUserListResponse = {
  user?: {
    /**
     * The ID of the user.
     */
    user_id?: string;
    /**
     * The name of the user.
     */
    user_name?: string;
    /**
     * The email of the user.
     */
    email?: string;
    /**
     * The role of the user.
     */
    role?: number;
    /**
     * The status of the user.
     */
    status?: GetOrganizationUserListResponse.status;
    /**
     * The date and time at which the user's account was created.
     */
    created?: string;
    /**
     * The background color of the default profile image of the user.
     */
    bg_color?: string;
    /**
     * Whether the user's account is active.
     */
    is_active?: boolean;
    /**
     * The language setting of the user.
     */
    language?: GetOrganizationUserListResponse.language;
    /**
     * The date and time of the user's last activity.
     */
    last_activity?: string;
    /**
     * The mode of the user.
     */
    mode?: string;
    /**
     * The status message of the user.
     */
    msg?: string;
    /**
     * The user's profile image link.
     */
    photo?: string;
    /**
     * The team the user is in.
     */
    team?: Array<TeamUser>;
    /**
     * The telephone number of the user.
     */
    tel?: string;
    /**
     * The timezone of the user.
     */
    timezone?: string;
    /**
     * Whether to make the timezone setting automatically based on the user location or follow the user setting.
     */
    timezone_auto_flag?: GetOrganizationUserListResponse.timezone_auto_flag;
  };
};

export namespace GetOrganizationUserListResponse {

  /**
   * The status of the user.
   */
  export enum status {
    ON = 'on',
    OFF = 'off',
  }

  /**
   * The language setting of the user.
   */
  export enum language {
    EN = 'en',
    KO = 'ko',
  }

  /**
   * Whether to make the timezone setting automatically based on the user location or follow the user setting.
   */
  export enum timezone_auto_flag {
    '_1' = 1,
    '_2' = 2,
  }


}

