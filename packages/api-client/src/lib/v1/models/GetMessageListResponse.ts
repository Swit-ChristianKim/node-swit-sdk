/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from './Message';
/**
 * An object wrapping a Swit resource.
 */
export type GetMessageListResponse = {
  /**
   * Details of each message retrieved.
   */
  messages?: Array<Message>;
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
};

