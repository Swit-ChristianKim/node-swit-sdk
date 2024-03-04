/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectUserResponse } from './ProjectUserResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetProjectUserListResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * User information of each member retrieved.
   */
  users?: Array<ProjectUserResponse>;
};

