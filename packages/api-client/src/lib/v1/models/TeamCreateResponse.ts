/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An object wrapping a Swit resource.
 */
export type TeamCreateResponse = {
  /**
   * The ID of the team.
   */
  id?: string;
  /**
   * The name of the team.
   */
  name?: string;
  /**
   * The ID of the parent team.
   */
  parent_id?: string;
  /**
   * The depth of the team.
   */
  depth?: number;
  /**
   * Custom text to be used as a reference. This is useful to store information from another source.
   */
  reference?: string;
};

