/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BucketResponse } from './BucketResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetProjectBucketListResponse = {
  /**
   * Details of each bucket retrieved.
   */
  buckets?: Array<BucketResponse>;
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
};

