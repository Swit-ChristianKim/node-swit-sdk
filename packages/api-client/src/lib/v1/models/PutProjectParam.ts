/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PutProjectParam = {
  /**
   * Description on the purpose of the project.
   */
  description?: string;
  /**
   * The ID of the project.
   */
  id: string;
  /**
   * The name of the project.
   */
  name?: string;
  /**
   * The fields to update. If this parameter is omitted or assigned an empty value, all fields will be updated. Fields without provided values will be set to empty or default values.
   */
  update_fields?: Array<string>;
};

