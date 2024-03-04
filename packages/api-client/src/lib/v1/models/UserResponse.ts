/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An object wrapping a Swit resource.
 */
export type UserResponse = {
  /**
   * The ID of the organization the user is in.
   */
  cmp_id?: string;
  /**
   * The background color of the fallback avatar of the user.
   */
  color?: string;
  /**
   * Previously used in the Free/Standard plans to describe the department the user is in.
   */
  department?: string;
  /**
   * The ID of the user. This is used for the API to identify the user.
   */
  id?: string;
  /**
   * The language setting of the user.
   */
  language?: UserResponse.language;
  /**
   * The username registered.
   */
  name?: string;
  /**
   * The URL path of the profile image, relative to `https://files.swit.io`.
   */
  photo?: string;
  /**
   * Whether the user's membership is active.
   * - `0`: Inactive
   * - `1`: Active
   */
  status?: number;
  /**
   * The status message the user has left.
   */
  status_msg?: string;
  /**
   * The phone number of the user.
   */
  tel?: string;
  /**
   * The timezone setting of the user.
   */
  timezone?: string;
  /**
   * The email address of the user.
   */
  user_email?: string;
};
export namespace UserResponse {
  /**
   * The language setting of the user.
   */
  export enum language {
    EN = 'en',
    KO = 'ko',
  }
}

