/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object wrapping a Swit resource.
 */
export type ProjectResponse = {
  /**
   * The date and time at which the project was created.
   */
  created?: string;
  /**
   * Description on the purpose of the project.
   */
  description?: string;
  /**
   * The user ID of the host of the project.
   */
  host_id?: string;
  /**
   * The ID of the project.
   */
  id?: string;
  /**
   * Whether the project is archived.
   */
  is_archived?: boolean;
  /**
   * Whether the user joined the project.
   */
  is_member?: boolean;
  /**
   * Whether the project is private.
   */
  is_private?: boolean;
  /**
   * Whether the project is starred by the user.
   */
  is_starred?: boolean;
  /**
   * The name of the project.
   */
  name?: string;
};

