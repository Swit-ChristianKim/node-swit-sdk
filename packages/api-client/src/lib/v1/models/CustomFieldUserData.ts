/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An object wrapping a Swit resource.
 */
export type CustomFieldUserData = {
  /**
   * The date and time at which the custom field's value was initially assigned for the user.
   */
  created?: string;
  /**
   * The ID of the custom field.
   */
  custom_field_id?: string;
  /**
   * The ID of the custom field data assigned for the user. Once created, it will remain unchanged even if the value is updated later.
   */
  custom_field_user_data_id?: string;
  /**
   * The custom field value assigned for the user.
   */
  data_value?: string;
  /**
   * Whether the custom field is used for this user.
   */
  enabled?: boolean;
  /**
   * The date and time at which the custom field value was last updated.
   */
  modified?: string;
  /**
   * The ID of the user.
   */
  user_id?: string;
};

