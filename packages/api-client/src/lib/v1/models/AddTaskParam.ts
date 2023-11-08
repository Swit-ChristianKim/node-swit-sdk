/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalAssetInfo } from './ExternalAssetInfo';

export type AddTaskParam = {
  /**
   * File attachments to the task.
   */
  assets?: Array<ExternalAssetInfo>;
  /**
   * The user ID of the member to whom to assign the task.
   */
  assign?: string;
  /**
   * Whether or not to use rich styles.
   * - `plain`: The `content` value will be parsed as plaintext.
   * - `json_string`: The `content` value will be parsed as an object representing a rich-formatted text.
   */
  body_type?: AddTaskParam.body_type;
  /**
   * The ID of the bucket the task is in.
   */
  bucket_id?: string;
  /**
   * Color assigned to the task.
   */
  color?: AddTaskParam.color;
  /**
   * The content of the task.
   */
  content?: string;
  /**
   * Where the task is created from.
   * - `B`: Backlog
   * - `M`: My tasks
   * - `C`: Bucket
   * - `ALL`: Assignee & status
   * - `A`: Assignee
   * - `S`: Status
   */
  create_type?: string;
  /**
   * Date by which the task will end. Use the `YYYY-MM-DD` format.
   */
  end_date?: string;
  /**
   * The storage type of the attached file.
   * - `google_drive`: Google Drive files.
   * - `gcp_storage`: All other types of files.
   */
  external_asset_type?: AddTaskParam.external_asset_type;
  /**
   * The ID(s) of the member(s) to collaborate in the task.
   */
  follow?: string;
  /**
   * Priority to set for the task.
   */
  priority?: string;
  /**
   * The ID of the project where to post the task.
   */
  project_id: string;
  /**
   * Date on which the task starts. Use the `YYYY-MM-DD` format.
   */
  start_date?: string;
  /**
   * **`Deprecated`**. Update the status using `api/task.status.update` instead.
   *
   * Status of the task:
   *
   * - `ToDo`: Set the task's status to "To Do".
   * - `Doing`: Set the task's status to "Doing".
   * - `Done`: Set the task's status to "Done".
   *
   * If not passed, the status is set to Backlog by default.
   */
  step?: string;
  /**
   * The tag associated with the task.
   */
  readonly tag?: string;
  /**
   * The title of the task.
   */
  title: string;
  /**
   * The ID of the workspace that includes the target project. Only required when `mytask` is passed to the `project_id` parameter (for a Personal task).
   */
  workspace_id?: string;
};

export namespace AddTaskParam {

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
   * Color assigned to the task.
   */
  export enum color {
    _F03621 = '#f03621',
    _F76363 = '#f76363',
    _FF8B00 = '#ff8b00',
    _FFBF00 = '#ffbf00',
    _8AC917 = '#8ac917',
    _5A9216 = '#5a9216',
    _00C7CF = '#00c7cf',
    _478BFF = '#478bff',
    _1D5ECC = '#1d5ecc',
    _8F0099 = '#8f0099',
    _7E828E = '#7e828e',
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

