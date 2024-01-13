/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WsGroup } from './WsGroup';

export type WorkspaceUserResponse = {
  /**
   * The background color of the fallback avatar of the user.
   */
  color?: string;
  /**
   * The department name of the user.
   */
  department?: string;
  /**
   * The groups the user belongs to.
   */
  group?: Array<WsGroup>;
  /**
   * Whether the user is an administrator of the workspace.
   */
  is_admin?: boolean;
  /**
   * Whether the user is the master of the workspace.
   */
  is_master?: boolean;
  /**
   * The date and time at which the user joined the workspace.
   */
  joined?: string;
  /**
   * The display name of the user.
   */
  name?: string;
  /**
   * The URL path of the profile image, relative to `https://files.swit.io`.
   */
  photo?: string;
  /**
   * Whether the user is active or inactive in the workspace.
   */
  status?: string;
  /**
   * The status message the user has left.
   */
  status_msg?: string;
  /**
   * The phone number of the user.
   */
  tel?: string;
  /**
   * The email address of the user.
   */
  readonly user_email?: string;
  /**
   * The ID of the user.
   */
  user_id?: string;
};

