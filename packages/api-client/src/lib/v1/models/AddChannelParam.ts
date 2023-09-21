/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddChannelParam = {
  /**
   * The description on the purpose of the channel.
   */
  description?: string;
  /**
   * Whether to disclose previous messages to new members.
   */
  is_prev_chat_visible?: boolean;
  /**
   * Whether to keep the channel private.
   */
  is_private?: boolean;
  /**
   * The name of the channel.
   */
  name: string;
  /**
   * The ID of the workspace where to create the channel.
   */
  workspace_id: string;
};

