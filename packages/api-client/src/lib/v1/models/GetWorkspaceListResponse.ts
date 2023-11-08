/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WorkspaceResponse } from './WorkspaceResponse';

/**
 * An object wrapping a Swit resource.
 */
export type GetWorkspaceListResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * Workspaces retrieved.
   */
  workspaces?: Array<WorkspaceResponse>;
};

