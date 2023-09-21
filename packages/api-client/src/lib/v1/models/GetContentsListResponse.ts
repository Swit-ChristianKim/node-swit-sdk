/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Contents } from './Contents';

/**
 * An object wrapping a Swit resource.
 */
export type GetContentsListResponse = {
  /**
   * Details of each post retrieved.
   */
  contents?: Array<Contents>;
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
};

