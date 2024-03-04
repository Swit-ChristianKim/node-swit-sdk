/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachments } from './Attachments';
import type { ReactionInfo } from './ReactionInfo';
/**
 * An object wrapping a Swit resource.
 */
export type Contents = {
  attachments?: Attachments;
  /**
   * An object representing the content of the post in rich text.
   */
  body_blockskit?: Record<string, any>;
  /**
   * The content of the post in plaintext.
   */
  body_text?: string;
  /**
   * The number of the comments added to the post.
   */
  child_cnt?: number;
  /**
   * The ID of the post.
   */
  contents_id?: string;
  /**
   * The type of the post.
   * - `chat`: Message or chat message
   * - `cmt`: Comment
   * - `system`: System message
   */
  contents_type?: string;
  /**
   * The date and time at which the post was created.
   */
  created?: string;
  /**
   * Whether or not the post is bookmarked.
   */
  is_bookmark?: boolean;
  /**
   * Whether or not the post has been deleted.
   */
  is_delete?: boolean;
  /**
   * Whether or not the post is pinned.
   */
  is_pin?: boolean;
  /**
   * The date and time at which the request was last edited.
   */
  modified?: string;
  /**
   * The ID of the entry last returned by the previous call.
   */
  offset?: string;
  /**
   * When the current post is a comment on another post, this parameter indicates the main post's ID.
   */
  parent_id?: string;
  /**
   * The client information.
   */
  properties?: {
    /**
     * The ID of the client.
     */
    client_id?: string;
    /**
     * Whether the message is an announcement.
     */
    is_outcome?: boolean;
  };
  /**
   * Emoji reactions that have been added to the post.
   */
  reactions?: Array<ReactionInfo>;
  /**
   * The ID of the chat that contains the post.
   */
  room_id?: string;
  /**
   * 5_274_bfd'
   */
  share_data?: Record<string, any>;
  /**
   * The ID of the user who created the post.
   */
  user_id?: string;
};

