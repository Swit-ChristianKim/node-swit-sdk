/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Team = {
  /**
   * The ID of the team.
   */
  team_id?: string;
  /**
   * The name of the team.
   */
  team_name?: string;
  /**
   * The ID of the parent team.
   */
  parent_id?: string;
  /**
   * The depth of the team.
   */
  depth?: number;
  /**
   * The count of members.
   */
  member_cnt?: number;
  /**
   * The list of members in the team.
   */
  users?: Array<string>;
  /**
   * Custom text to be used as a reference. This is useful to store information from another source.
   */
  reference?: string;
};

