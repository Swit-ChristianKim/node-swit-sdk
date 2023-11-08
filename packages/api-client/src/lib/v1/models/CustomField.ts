/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CustomFieldOption } from './CustomFieldOption';

/**
 * The properties of a custom field.
 */
export type CustomField = {
  /**
   * The ID of the organization.
   */
  cmp_id?: string;
  /**
   * The date and time at which the custom field was created.
   */
  created?: string;
  /**
   * The ID of the custom field.
   */
  custom_field_id?: string;
  /**
   * Array of selections if the field type is dropdown (`field_type=OPTION`).
   */
  custom_field_options?: Array<CustomFieldOption>;
  /**
   * The placeholder for the custom field if the field type is text (`field_type=STRING`) or URL (`field_type=URL`).
   */
  description?: string;
  /**
   * Who can update the field's value:
   * - `ADMIN`: The organization's admins can update the field's value for each member.
   * - `MEMBER`: Each member can update the field's value for their own profile.
   */
  edit_role?: CustomField.edit_role;
  /**
   * Whether the field is set to be displayed on user profiles.
   */
  enabled?: boolean;
  /**
   * The type of custom fields used.
   */
  field_domain?: any;
  /**
   * The name of the custom field.
   */
  field_name?: string;
  /**
   * The type of the custom field: `STRING`, `URL`, or `OPTION` (dropdown).
   */
  field_type?: CustomField.field_type;
  /**
   * The date and time at which the custom field was last updated.
   */
  modified?: string;
};

export namespace CustomField {

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
   * The type of the custom field: `STRING`, `URL`, or `OPTION` (dropdown).
   */
  export enum field_type {
    STRING = 'STRING',
    URL = 'URL',
    OPTION = 'OPTION',
  }


}

