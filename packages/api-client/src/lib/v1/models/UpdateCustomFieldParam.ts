/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UpdateCustomFieldParam = {
  /**
   * The ID of the custom field to update.
   */
  custom_field_id: string;
  /**
   * Who can update the field's value on individual members' user profiles.
   * - `ADMIN`: Admins can update the field's value on any member's profile.
   * - `MEMBER`: Members can update the field's value on their own profile.
   */
  edit_role?: UpdateCustomFieldParam.edit_role;
  /**
   * Whether to display the field on user profiles. Up to five fields can be set to be displayed.
   */
  enabled?: boolean;
};
export namespace UpdateCustomFieldParam {
  /**
   * Who can update the field's value on individual members' user profiles.
   * - `ADMIN`: Admins can update the field's value on any member's profile.
   * - `MEMBER`: Members can update the field's value on their own profile.
   */
  export enum edit_role {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
  }
}

