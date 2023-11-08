/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalAssetInfo } from './ExternalAssetInfo';

export type CreateIdeaCommentParam = {
  /**
   * File attachments to the idea comment.
   */
  assets?: ExternalAssetInfo;
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  body_type?: CreateIdeaCommentParam.body_type;
  /**
   * The content of the comment.
   */
  content: string;
  /**
   * The storage type of the attached file.
   * - `google_drive`: Google Drive files.
   * - `gcp_storage`: All other types of files.
   */
  external_asset_type?: CreateIdeaCommentParam.external_asset_type;
  /**
   * The ID of the idea to comment on.
   */
  idea_id: string;
};

export namespace CreateIdeaCommentParam {

  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  export enum body_type {
    PLAIN = 'plain',
    JSON_STRING = 'json_string',
  }

  /**
   * The storage type of the attached file.
   * - `google_drive`: Google Drive files.
   * - `gcp_storage`: All other types of files.
   */
  export enum external_asset_type {
    GOOGLE_DRIVE = 'google_drive',
    GCP_STORAGE = 'gcp_storage',
  }


}

