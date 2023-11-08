/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object wrapping a Swit resource.
 */
export type WorkspaceResponse = {
  /**
   * The user IDs of the workspace administrators.
   */
  admin_ids?: Array<string>;
  /**
   * The background color of the default profile image of the workspace.
   */
  color?: string;
  /**
   * The date and time at which the workspace was created.
   */
  created?: string;
  /**
   * The domain name of the workspace.
   */
  domain?: string;
  /**
   * The ID of the workspace.
   */
  id?: string;
  /**
   * The user ID of the workspace master.
   */
  master_id?: string;
  /**
   * The name of the workspace.
   */
  name?: string;
  /**
   * The URL path of the profile image, relative to `https://files.swit.io`.
   */
  photo?: string;
};

