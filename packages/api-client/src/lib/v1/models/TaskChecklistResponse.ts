/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object wrapping a Swit resource.
 */
export type TaskChecklistResponse = {
  /**
   * The content of the checklist item.
   */
  content?: string;
  /**
   * The date and time at which the checklist item was created.
   */
  created?: string;
  /**
   * The ID of the checklist item.
   */
  id?: string;
  /**
   * Whether the checklist item is complete.
   */
  is_complete?: boolean;
  /**
   * The ID of the task.
   */
  task_id?: string;
  /**
   * The ID of the user who added the checklist item.
   */
  user_id?: string;
};

