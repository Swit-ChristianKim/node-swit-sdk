/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Room } from './Room';
/**
 * An object wrapping a Swit resource.
 */
export type GetRoomListResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * Details of each chat retrieved.
   */
  rooms?: Array<Room>;
};

