/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldUserDataElement } from './CustomFieldUserDataElement';
export type UpdateUserCustomFieldParam = {
  /**
   * Array of custom field objects to update for the selected user.
   */
  custom_field_user_data_elements: Array<CustomFieldUserDataElement>;
  /**
   * The fields to update. If this parameter is omitted or assigned an empty value, all fields will be updated. Fields without provided values will be set to empty or default values.
   */
  update_fields?: Array<'data_value' | 'enabled'>;
  /**
   * The ID of the user to update with the selected custom fields.
   */
  user_id: string;
};

