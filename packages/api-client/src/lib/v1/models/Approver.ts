/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Approver = {
  /**
   * The date and time at which the approver approved or declined the request at this level.
   */
  action_date?: string;
  /**
   * The approver's status.
   * - `1`: Being requested for approval
   * - `2`: Approved the request.
   * - `3`: Declined the request.
   * - `4`: The request was processed at this level by another approver.
   */
  approver_status?: number;
  /**
   * The user ID of the approver.
   */
  approver_user_id?: string;
  /**
   * The level of approval.
   */
  step?: number;
};

