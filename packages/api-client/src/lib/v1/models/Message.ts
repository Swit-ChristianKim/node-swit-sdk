/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachments } from './Attachments';
import type { ExternalAssetInfo } from './ExternalAssetInfo';
/**
 * The properties of a message.
 */
export type Message = {
  /**
   * File attachments to the message.
   */
  assets?: Array<ExternalAssetInfo>;
  attachments?: Attachments;
  /**
   * The ID of the channel.
   */
  channel_id?: string;
  /**
   * The number of comments added.
   */
  comment_count?: number;
  /**
   * The content of the message.
   */
  content?: string;
  /**
   * The date and time at which the message was created.
   */
  created?: string;
  /**
   * The ID of the message.
   */
  message_id?: string;
  /**
   * The ID of the user who created the message.
   */
  user_id?: string;
  /**
   * The display name of the user who created the message.
   */
  user_name?: string;
};

