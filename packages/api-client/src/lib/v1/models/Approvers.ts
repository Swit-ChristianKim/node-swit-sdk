/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Approvers = {
  /**
   * The user IDs of the approvers.
   */
  approver_ids?: Array<string>;
  /**
   * The level of approval.
   */
  step?: number;
  /**
   * - `0`: Any approver can approver to pass the current approval level.
   * - `1`: Every approver must approve to pass the current approval level.
   */
  step_condition?: number;
};

