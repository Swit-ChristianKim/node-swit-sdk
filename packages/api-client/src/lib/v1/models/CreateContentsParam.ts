/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CreateContentsParam = {
  /**
   * The ID of the attachment to include in the post.
   */
  assets?: Array<string>;
  /**
   * The content of the post. If `body_type=json_string` is passed, it must be a string converted from a JSON object representing a rich-formatted text *(We'll add guidelines on how to construct a rich-text object soon)*.
   */
  body?: string;
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  body_type?: CreateContentsParam.body_type;
  /**
   * Pass the main post's ID if you're to add a comment to a main post.
   */
  parent_id?: string;
  /**
   * The ID of the chat where to create the post.
   */
  room_id: string;
};
export namespace CreateContentsParam {
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  export enum body_type {
    PLAIN = 'plain',
    JSON_STRING = 'json_string',
  }
}

