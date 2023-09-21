/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StepListOfApprovers } from './StepListOfApprovers';

export type GetApprovalListResponse = {
  /**
   * The ID of the template used.
   */
  approval_category_id?: string;
  /**
   * The name of the template used.
   */
  approval_category_name?: string;
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
   * The number of comments added.
   */
  comment_count?: number;
  /**
   * The date and time at which the request was created.
   */
  created?: string;
  /**
   * Request ID displayed to users. It's used for display purposes while `approval_id` is for programming use.
   */
  doc_id?: string;
  /**
   * Whether or not the request is bookmarked by the user.
   */
  is_bookmarked?: number;
  /**
   * To whom this request is to be circulated after approved.
   * - `0`: None
   * - `1`: The submitter's teams
   * - `2`: The approvers' teams
   * - `3`: Both the submitter's & approvers' teams
   */
  is_public?: number;
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
   * The title of the request.
   */
  title?: string;
};

