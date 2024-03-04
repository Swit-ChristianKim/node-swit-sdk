/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Asset } from './Asset';
import type { Referrer } from './Referrer';
import type { StepListOfApprovers } from './StepListOfApprovers';
import type { Substitute } from './Substitute';
/**
 * An object wrapping a Swit resource.
 */
export type CreateApprovalResponse = {
  /**
   * The approver who approved or rejected the request.
   */
  action_user_id?: string;
  /**
   * The ID of the template used.
   */
  approval_category_id?: string;
  /**
   * The name of the template used.
   */
  approval_category_name?: string;
  /**
   * The ID of the content of a request.
   */
  approval_cont_id?: string;
  /**
   * The ID of the request.
   */
  approval_id?: string;
  /**
   * Status of the request.
   * - `0`: Drafted
   * - `1`: Waiting for approval
   * - `2`: Approved
   * - `3`: Declined
   */
  approval_status?: number;
  /**
   * URL of the request.
   */
  approval_url?: string;
  /**
   * The condition for the request to be processed to the next level.
   * - `0`: Any approver can approve
   * - `1`: Every approver must approve
   */
  approve_condition?: number;
  /**
   * List of data attachments to the request.
   */
  asset_data?: Array<Asset>;
  /**
   * An object representing the content of the post in rich text.
   */
  body_blockskit?: string;
  /**
   * The content of the post in plaintext.
   */
  body_text?: string;
  /**
   * The ID of the organization.
   */
  cmp_id?: string;
  /**
   * The highest level of approval that has been processed so far.
   */
  completed_step?: number;
  /**
   * The date and time at which the request was created.
   */
  created?: string;
  /**
   * Request ID displayed to users. It's used for display purposes while `approval_id` is for programming use.
   */
  doc_id?: string;
  /**
   * HTML content attached to the request.
   */
  html_content?: string;
  /**
   * Whether or not the request is bookmarked by the user.
   */
  is_bookmarked?: number;
  /**
   * 5_278_bfg'
   */
  is_html_editable?: number;
  /**
   * To whom this request is to be circulated after approved.
   * - `0`: None
   * - `1`: The submitter's teams
   * - `2`: The approvers' teams
   * - `3`: Both the submitter's & approvers' teams
   */
  is_public?: number;
  /**
   * The date and time at which the request was last edited.
   */
  modified?: string;
  /**
   * The IDs of the recipient teams.
   */
  referrer_teams?: Array<string>;
  /**
   * Users who're CC'd to the request.
   */
  referrers?: Array<Referrer>;
  /**
   * The ID of the user who created the request.
   */
  req_user_id?: string;
  /**
   * The date and time at which the request was submitted.
   */
  requested?: string;
  /**
   * Approvers for each level.
   */
  step_approvers?: Array<StepListOfApprovers>;
  /**
   * The total number of approval levels.
   */
  step_count?: number;
  /**
   * Proxy approval status.
   */
  substitute?: Array<Substitute>;
  /**
   * The title of the request.
   */
  title?: string;
};

