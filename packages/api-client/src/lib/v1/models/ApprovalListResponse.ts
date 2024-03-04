/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetApprovalListResponse } from './GetApprovalListResponse';
/**
 * An object wrapping a Swit resource.
 */
export type ApprovalListResponse = {
  /**
   * Details of each request retrieved.
   */
  approvals?: Array<GetApprovalListResponse>;
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
};

