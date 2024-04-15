/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskCommentResponse } from './TaskCommentResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetTaskCommentResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * Details of each comment retrieved.
   */
  taskComments?: Array<TaskCommentResponse>;
};

