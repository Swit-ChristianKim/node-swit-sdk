/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TeamUser } from './TeamUser';

/**
 * An object wrapping a Swit resource.
 */
export type GetOrganizationUserListResponse = {
  /**
   * The ID of the user.
   */
  user_id?: string;
  /**
   * The name of the user.
   */
  user_name?: string;
  /**
   * The email address of the user.
   */
  email?: string;
  /**
   * The role of the user.
   * - `10`: The master of the organization.
   * - `20`: An admin of the organization.
   * - `30`: A member of the organization.
   * - `40`: A guest.
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
   * The background color of the fallback avatar of the user.
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
   * The teams the user is in.
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
   * Whether to make the timezone setting automatically based on the user location or follow the user setting. 1 means checked the 'Set automatically based on your location' checkbox, and 2 means the checkbox is not checked.
   */
  timezone_auto_flag?: GetOrganizationUserListResponse.timezone_auto_flag;
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
   * Whether to make the timezone setting automatically based on the user location or follow the user setting. 1 means checked the 'Set automatically based on your location' checkbox, and 2 means the checkbox is not checked.
   */
  export enum timezone_auto_flag {
    '_1' = 1,
    '_2' = 2,
  }


}

