/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Approvers } from './Approvers';

export type CreateApprovalParam = {
  /**
   * The ID of the template used.
   */
  approval_category_id?: string;
  /**
   * Approvers for each level.
   */
  approvers?: Array<Approvers>;
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  body_type?: CreateApprovalParam.body_type;
  /**
   * The content of the request. If `body_type=json_string` is passed, it must be a string converted from a JSON object representing a rich-formatted text (We’ll add guidelines on how to construct a rich-text object soon).
   */
  contents: string;
  /**
   * HTML content that will be attached to the request. Note that only the inline `style` attribute is allowed for each individual element and the `<style>` tag is not supported here.
   */
  html_content?: string;
  /**
   * Determines whether to submit the approval request. If `true`, submit the request; if `false`, save as a draft.
   */
  submit_on_create?: boolean;
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
   * The title of the request.
   */
  title: string;
};

export namespace CreateApprovalParam {

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

