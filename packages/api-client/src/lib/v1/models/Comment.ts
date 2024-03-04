/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalAssetInfo } from './ExternalAssetInfo';
/**
 * The properties for a comment.
 */
export type Comment = {
  /**
   * File attachments to the comment.
   */
  assets?: Array<ExternalAssetInfo>;
  /**
   * The ID of the comment.
   */
  comment_id?: string;
  /**
   * The content of the comment.
   */
  content?: string;
  /**
   * The date and time at which the comment was posted.
   */
  created?: string;
  /**
   * The ID of the user who posted the comment.
   */
  user_id?: string;
  /**
   * The display name of the user who posted the comment.
   */
  user_name?: string;
};

