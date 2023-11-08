/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Approver } from './Approver';

export type StepListOfApprovers = {
  /**
   * List of approvers at this level.
   */
  approvers?: Array<Approver>;
  /**
   * The level of approval.
   */
  step?: number;
  /**
   * - `0`: Any approver can approver to pass the current approval level.
   * - `1`: Every approver must approve to pass the current approval level.
   */
  step_condition?: number;
  /**
   * Approval status at this level.
   * - `1`: Waiting for approval
   * - `2`: Approved
   * - `3`: Declined
   */
  step_status?: number;
};

