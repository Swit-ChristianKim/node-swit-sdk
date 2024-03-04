/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AddProjectParam = {
  /**
   * Description on the purpose of the project.
   */
  description?: string;
  /**
   * Whether to keep the project private.
   */
  is_private?: boolean;
  /**
   * The name of the project.
   */
  name: string;
  /**
   * The ID of the workspace where to create the project.
   */
  workspace_id: string;
};

