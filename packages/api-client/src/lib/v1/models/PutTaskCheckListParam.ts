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
   * The fields to update. If this parameter is omitted or assigned an empty value, all fields will be updated. Fields without provided values will be set to empty or default values.
   */
  update_fields?: Array<string>;
};

