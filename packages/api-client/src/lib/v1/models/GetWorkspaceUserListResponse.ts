/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkspaceUserResponse } from './WorkspaceUserResponse';

/**
 * An object wrapping a Swit resource.
 */
export type GetWorkspaceUserListResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * User information of each member retrieved.
   */
  user?: Array<WorkspaceUserResponse>;
};

