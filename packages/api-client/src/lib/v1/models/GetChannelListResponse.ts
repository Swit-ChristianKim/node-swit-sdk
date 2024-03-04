/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChannelResponse } from './ChannelResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetChannelListResponse = {
  /**
   * Details of each channel retrieved.
   */
  channels?: Array<ChannelResponse>;
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
};

