/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Asset = {
  /**
   * The ID of the file.
   */
  approval_asset_id?: string;
  /**
   * The ID of the content of the request.
   */
  approval_cont_id?: string;
  /**
   * The ID of the request to which this file is attached.
   */
  approval_id?: string;
  /**
   * The date and time at which the file was uploaded.
   */
  created?: string;
  /**
   * Description on the file.
   */
  file_desc?: string;
  /**
   * MIME type of the file.
   */
  file_mime?: string;
  /**
   * The name of the file.
   */
  file_name?: string;
  /**
   * The URL path of the file.
   */
  file_path?: string;
  /**
   * The size of the file in bytes.
   */
  file_size?: number;
  /**
   * The image's width.
   */
  image_x?: number;
  /**
   * The image's height.
   */
  image_y?: number;
  /**
   * The Thumbnail URL of the file.
   */
  thumbnail?: string;
  /**
   * The ID of the user who uploaded the file.
   */
  user_id?: string;
};

