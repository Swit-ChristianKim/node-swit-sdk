/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalAssetInfo } from './ExternalAssetInfo';

/**
 * The properties of an idea.
 */
export type Idea = {
  /**
   * File attachments to the idea.
   */
  assets?: Array<ExternalAssetInfo>;
  /**
   * The ID of the channel.
   */
  channel_id?: string;
  /**
   * The number of comments added.
   */
  comment_count?: number;
  /**
   * The content of the idea.
   */
  content?: string;
  /**
   * The date and time at which the idea was created.
   */
  created?: string;
  /**
   * The ID of the idea.
   */
  idea_id?: string;
  /**
   * The ID of the user who created the idea.
   */
  user_id?: string;
  /**
   * The display name of the user who created the idea.
   */
  user_name?: string;
};

