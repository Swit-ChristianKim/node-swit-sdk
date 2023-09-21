/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Referrer = {
  /**
   * The user ID CC'd to the request.
   */
  referrer_user_id?: string;
  /**
   * How the user was CC'd.
   * - `0`: Automatically added as a CC recipient because somebody else is acting as a proxy approver for this user.
   * - `1`: The submitter added this user as a CC recipient.
   */
  register_type?: number;
};

