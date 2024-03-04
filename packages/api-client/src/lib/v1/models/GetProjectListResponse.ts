/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectResponse } from './ProjectResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetProjectListResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * Details of each project retrieved.
   */
  projects?: Array<ProjectResponse>;
};

