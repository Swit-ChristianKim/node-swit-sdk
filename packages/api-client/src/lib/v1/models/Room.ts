/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Contents } from './Contents';

/**
 * The properties of a chat.
 */
export type Room = {
  contents?: Contents;
  /**
   * The date and time at which the chat was created.
   */
  created?: string;
  /**
   * ID of the other user in the 1:1 chat. Only used when the response contains `room_type=direct message`.
   */
  direct_user_id?: string;
  /**
   * Whether or not the chat is hidden by the user.
   */
  is_hidden?: boolean;
  /**
   * Whether or not the post is starred.
   */
  is_starred?: boolean;
  /**
   * The date and time at which the user last read the content in the chat.
   */
  last_read?: string;
  /**
   * The number of the members of the chat.
   */
  member_count?: number;
  /**
   * The IDs of the users who are in the chat.
   */
  members?: Array<string>;
  /**
   * The push notification preference set for this chat.
   * - `everything`: Receive push notifications for all relevant events.
   * - `mentions`: Receive push notifications for mentions relevant to the user.
   * - `nothing`: Do not receive push notifications.
   */
  push_type?: string;
  /**
   * The ID of the chat.
   */
  room_id?: string;
  /**
   * The name of the chat visible to the user.
   */
  room_name?: string;
  /**
   * The type of the chat.
   * - `group message`: Group chat
   * - `direct message`: 1:1 chat
   */
  room_type?: string;
  /**
   * Whether or not the chat is active.
   */
  status?: string;
  /**
   * The number of the messages the user has not read.
   */
  unread_count?: number;
};

