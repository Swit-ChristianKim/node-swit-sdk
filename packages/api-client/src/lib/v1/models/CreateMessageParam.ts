/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachments } from './Attachments';
import type { ExternalAssetInfo } from './ExternalAssetInfo';
export type CreateMessageParam = {
  /**
   * File attachments to the message.
   */
  assets?: Array<ExternalAssetInfo>;
  attachments?: Attachments;
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  body_type?: CreateMessageParam.body_type;
  /**
   * The ID of the channel where to create the message.
   */
  channel_id: string;
  /**
   * The content of the message.
   */
  content: string;
  /**
   * The storage type of the attached file.
   * - `google_drive`: Google Drive files.
   * - `gcp_storage`: All other types of files.
   */
  external_asset_type?: CreateMessageParam.external_asset_type;
};
export namespace CreateMessageParam {
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

