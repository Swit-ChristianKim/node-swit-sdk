/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectTagResponse } from './ProjectTagResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetProjectTagListResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * Details of each tag retrieved.
   */
  projectTags?: Array<ProjectTagResponse>;
};

