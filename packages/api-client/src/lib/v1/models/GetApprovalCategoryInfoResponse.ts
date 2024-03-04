/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Approvers } from './Approvers';
/**
 * An object wrapping a Swit resource.
 */
export type GetApprovalCategoryInfoResponse = {
  /**
   * The ID of the template.
   */
  approval_category_id?: string;
  /**
   * The name of the template.
   */
  approval_category_name?: string;
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  body_type?: GetApprovalCategoryInfoResponse.body_type;
  /**
   * The ID of the organization.
   */
  cmp_id?: string;
  /**
   * Content of the request. If `body_type=json_string` is passed, it must be a string converted from a JSON object representing a rich-formatted text (We’ll add guidelines on how to construct a rich-text object soon).
   */
  contents?: string;
  /**
   * The date and time at which the template was created.
   */
  created?: string;
  /**
   * To whom this request is to be circulated after approved.
   * - `0`: None
   * - `1`: The submitter's teams
   * - `2`: The approvers' teams
   * - `3`: Both the submitter's & approvers' teams
   */
  is_public?: number;
  /**
   * The IDs of the recipient teams.
   */
  referrer_teams?: Array<string>;
  /**
   * The user IDs who're CC'd to the request.
   */
  referrers?: Array<string>;
  /**
   * The ID of the user who created the request.
   */
  req_user_id?: string;
  /**
   * Approvers for each level.
   */
  step_approvers?: Array<Approvers>;
  /**
   * The title of the request.
   */
  title?: string;
};
export namespace GetApprovalCategoryInfoResponse {
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  export enum body_type {
    PLAIN = 'plain',
    JSON_STRING = 'json_string',
  }
}

