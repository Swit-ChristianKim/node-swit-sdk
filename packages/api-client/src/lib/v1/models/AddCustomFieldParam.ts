/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CustomFieldOptionElement } from './CustomFieldOptionElement';
export type AddCustomFieldParam = {
  /**
   * Array of selections if the field type is dropdown (`field_type=OPTION`).
   */
  custom_field_elements?: Array<CustomFieldOptionElement>;
  /**
   * The placeholder for the custom field if the field type is text (`field_type=STRING`) or URL (`field_type=URL`).
   */
  description?: string;
  /**
   * Who can update the field's value:
   * - `ADMIN`: The organization's admins can update the field's value for each member.
   * - `MEMBER`: Each member can update the field's value for their own profile.
   */
  edit_role: AddCustomFieldParam.edit_role;
  /**
   * Whether to display the field on user profiles. Up to five fields can be set to be displayed.
   */
  enabled: boolean;
  /**
   * The name of the custom field.
   */
  field_name: string;
  /**
   * Type of the custom field: `STRING`, `URL`, or `OPTION` (dropdown).
   */
  field_type: AddCustomFieldParam.field_type;
};
export namespace AddCustomFieldParam {
  /**
   * Who can update the field's value:
   * - `ADMIN`: The organization's admins can update the field's value for each member.
   * - `MEMBER`: Each member can update the field's value for their own profile.
   */
  export enum edit_role {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
  }
  /**
   * Type of the custom field: `STRING`, `URL`, or `OPTION` (dropdown).
   */
  export enum field_type {
    STRING = 'STRING',
    URL = 'URL',
    OPTION = 'OPTION',
  }
}

