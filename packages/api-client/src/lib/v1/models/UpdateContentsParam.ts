/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateContentsParam = {
  /**
   * The content of the post. If `body_type=json_string` is passed, it must be a string converted from a JSON object representing a rich-formatted text *(We'll add guidelines on how to construct a rich-text object soon)*.
   */
  body?: string;
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  body_type?: UpdateContentsParam.body_type;
  /**
   * The ID of the post.
   */
  contents_id: string;
  /**
   * The ID of the chat that contains the post.
   */
  room_id: string;
};
export namespace UpdateContentsParam {
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

