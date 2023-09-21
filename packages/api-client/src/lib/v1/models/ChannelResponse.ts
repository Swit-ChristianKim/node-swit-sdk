/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object wrapping a Swit resource.
 */
export type ChannelResponse = {
  /**
   * The date and time at which the channel was created.
   */
  created?: string;
  /**
   * Description on the purpose of the channel.
   */
  description?: string;
  /**
   * The ID of the host of the channel.
   */
  host_id?: string;
  /**
   * The ID of the channel.
   */
  id?: string;
  /**
   * Whether the channel is archived.
   */
  is_archived?: boolean;
  /**
   * Whether the user joined the channel.
   */
  is_member?: boolean;
  /**
   * Whether the channel discloses previous messages to new members.
   */
  is_prev_chat_visible?: boolean;
  /**
   * Whether the channel is private.
   */
  is_private?: boolean;
  /**
   * Whether the channel is starred by the user.
   */
  is_starred?: boolean;
  /**
   * The name of the channel.
   */
  name?: string;
  /**
   * Type of the channel.
   *
   * - `dfl`: The channel is the default chat room joined by all workspace members.
   * - `gen`: The channel is an additionally created group chat.
   */
  type?: string;
};

