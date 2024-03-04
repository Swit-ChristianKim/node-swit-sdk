/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Idea } from './Idea';
/**
 * An object wrapping a Swit resource.
 */
export type GetIdeaListResponse = {
  /**
   * Details of each post retrieved.
   */
  ideas?: Array<Idea>;
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
};

