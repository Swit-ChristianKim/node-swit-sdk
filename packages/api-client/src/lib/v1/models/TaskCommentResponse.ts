/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalAssetInfo } from './ExternalAssetInfo';

/**
 * An object wrapping a Swit resource.
 */
export type TaskCommentResponse = {
  /**
   * File attachments to the task.
   */
  assets?: Array<ExternalAssetInfo>;
  /**
   * The content of the comment.
   */
  content?: string;
  /**
   * The date and time at which the comment was posted.
   */
  created?: string;
  /**
   * The ID of the comment.
   */
  id?: string;
  /**
   * Whether or not allows the user to customize the way text looks.
   */
  rich_text?: boolean;
  /**
   * The ID of the task.
   */
  task_id?: string;
  /**
   * The ID of the user who posted the comment.
   */
  user_id?: string;
  /**
   * The display name of the user who posted the comment.
   */
  user_name?: string;
};

