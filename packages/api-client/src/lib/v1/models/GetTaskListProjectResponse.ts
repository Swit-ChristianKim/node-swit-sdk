/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskResponse } from './TaskResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetTaskListProjectResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * Details of each task retrieved.
   */
  tasks?: Array<TaskResponse>;
};

