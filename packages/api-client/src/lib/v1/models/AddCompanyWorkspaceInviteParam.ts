/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddCompanyWorkspaceInviteParam = {
  /**
   * The ID of the workspace to invite the user to.
   */
  id: string;
  /**
   * The ID of the user to invite to the workspace. (If values are provided for both "user_id" and "user_ids", then "user_ids" will take precedence.)
   */
  user_id?: string;
  /**
   * IDs of users to invite to the workspace. (If values are provided for both "user_id" and "user_ids", then "user_ids" will take precedence.)
   */
  user_ids?: Array<string>;
};

