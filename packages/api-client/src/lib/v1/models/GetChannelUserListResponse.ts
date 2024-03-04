/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelUserResponse } from './ChannelUserResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetChannelUserListResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * The information of users retrieved.
   */
  users?: Array<ChannelUserResponse>;
};

