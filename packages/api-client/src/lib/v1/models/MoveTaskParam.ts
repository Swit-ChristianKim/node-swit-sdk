/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MoveTaskParam = {
  /**
   * Whether to include the assignee.
   */
  assign?: boolean;
  /**
   * Whether to include the collaborators.
   */
  follow?: boolean;
  /**
   * The ID of the task to move.
   */
  id: string;
  /**
   * The ID of the destination bucket.
   */
  target_bucket_id?: string;
  /**
   * The ID of the destination project.
   */
  target_project_id: string;
};

