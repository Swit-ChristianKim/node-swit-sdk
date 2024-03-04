/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An object wrapping a Swit resource.
 */
export type GetOrganizationResponse = {
  /**
   * The ID of the organization.
   */
  id?: string;
  /**
   * The name of the organization.
   */
  name?: string;
  /**
   * The subdomain associated with the organization.
   */
  subdomain?: string;
  /**
   * The URL path of the organization profile image, relative to `https://files.swit.io`.
   */
  photo?: string;
  /**
   * The background color of the fallback avatar of the organization.
   */
  color?: string;
};

