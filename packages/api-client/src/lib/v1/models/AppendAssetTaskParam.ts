/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalAssetInfo } from './ExternalAssetInfo';

export type AppendAssetTaskParam = {
  /**
   * File attachments to the task.
   */
  assets?: Array<ExternalAssetInfo>;
  /**
   * The storage type of the attached file.
   * - `google_drive`: Google Drive files.
   * - `gcp_storage`: All other types of files.
   */
  external_asset_type?: AppendAssetTaskParam.external_asset_type;
  /**
   * The ID of the task.
   */
  id: string;
  /**
   * The ID of the workspace.
   */
  workspace_id?: string;
};

export namespace AppendAssetTaskParam {

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

