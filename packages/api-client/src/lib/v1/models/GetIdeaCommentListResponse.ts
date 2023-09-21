/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Comment } from './Comment';

/**
 * An object wrapping a Swit resource.
 */
export type GetIdeaCommentListResponse = {
  /**
   * Details of each comment retrieved.
   */
  comments?: Array<Comment>;
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
};

