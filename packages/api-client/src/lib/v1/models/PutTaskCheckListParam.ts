/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PutTaskCheckListParam = {
  /**
   * The content of the checklist item.
   */
  content?: string;
  /**
   * The ID of the checklist item.
   */
  id: string;
  /**
   * Whether the checklist item is complete.
   */
  is_complete?: boolean;
  /**
   * The fields to update.
   */
  update_fields?: Array<string>;
};

