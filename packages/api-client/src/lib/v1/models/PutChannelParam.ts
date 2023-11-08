/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PutChannelParam = {
  /**
   * The description or purpose of the channel.
   */
  description?: string;
  /**
   * The ID of the channel.
   */
  id: string;
  /**
   * Whether to disclose previous messages to new members.
   */
  is_prev_chat_visible?: boolean;
  /**
   * The name of the channel.
   */
  name?: string;
  /**
   * The fields to update for the channel.
   */
  update_fields?: Array<string>;
};

