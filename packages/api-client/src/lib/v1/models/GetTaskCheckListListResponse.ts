/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TaskChecklistResponse } from './TaskChecklistResponse';
/**
 * An object wrapping a Swit resource.
 */
export type GetTaskCheckListListResponse = {
  /**
   * Offset string that indicates the last entry returned.
   */
  offset?: string;
  /**
   * Details of each checklist item retrieved.
   */
  taskChecklists?: Array<TaskChecklistResponse>;
};

