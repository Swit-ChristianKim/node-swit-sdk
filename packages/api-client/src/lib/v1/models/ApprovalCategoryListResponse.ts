/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetApprovalCategoryListResponse } from './GetApprovalCategoryListResponse';
/**
 * An object wrapping a Swit resource.
 */
export type ApprovalCategoryListResponse = {
  /**
   * Details of each request template retrieved.
   */
  categories?: Array<GetApprovalCategoryListResponse>;
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
};

