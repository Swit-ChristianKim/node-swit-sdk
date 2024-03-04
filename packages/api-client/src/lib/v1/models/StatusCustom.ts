/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A custom status.
 */
export type StatusCustom = {
  /**
   * The color label associated with the status.
   */
  color_label?: string;
  /**
   * The attribute associated with the status:
   *
   * - `NOT_STARTED`: The task is in the Backlog.
   * - `DONE`: The task is in the "Done" status.
   * - `IN_PROGRESS`: The task is in any other status.
   */
  status_attribute?: string;
  /**
   * The ID of the status.
   */
  status_id?: string;
  /**
   * The name of the status.
   */
  status_name?: string;
};

