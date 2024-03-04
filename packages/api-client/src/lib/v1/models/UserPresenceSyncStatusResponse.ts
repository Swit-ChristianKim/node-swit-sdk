/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * An object wrapping a Swit resource.
 */
export type UserPresenceSyncStatusResponse = {
  /**
   * The ID of the app that issued the access token passed.
   */
  app_id?: string;
  /**
   * Whether or not the app is allowed to update the presence sync of the authorizing user.
   */
  is_presence_sync_on?: boolean;
};

