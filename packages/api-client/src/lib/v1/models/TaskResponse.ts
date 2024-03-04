/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExternalAssetInfo } from './ExternalAssetInfo';
import type { StatusCustom } from './StatusCustom';
/**
 * An object wrapping a Swit resource.
 */
export type TaskResponse = {
  /**
   * File attachments to the task.
   */
  assets?: Array<ExternalAssetInfo>;
  /**
   * **`Deprecated`**. Use `assignees` instead.
   *
   * The user ID of the assignee of the task. If not assigned, it returns `unassign`.
   */
  assign?: string;
  /**
   * The user IDs of the assignees of the task.
   */
  assignees?: Array<string>;
  /**
   * The ID of the bucket under which the task is placed.
   */
  bucket_id?: string;
  /**
   * The color assigned to the task.
   */
  color?: TaskResponse.color;
  /**
   * The number of comments added.
   */
  comment_count?: number;
  /**
   * The content of the task.
   */
  content?: string;
  /**
   * Date scheduled to finish the task.
   */
  end_date?: string;
  /**
   * The user IDs of the collaborators on the task.
   */
  follow?: Array<string>;
  /**
   * The ID of the task.
   */
  id?: string;
  /**
   * Whether the start or due time, including the specific time of day, is set for the task.
   */
  isTime?: boolean;
  /**
   * Priority set for the task.
   */
  priority?: string;
  /**
   * The ID of the project that contains the task.
   */
  project_id?: string;
  /**
   * Whether or not allows the user to customize the way text looks.
   */
  rich_text?: boolean;
  /**
   * Date scheduled to start the task.
   */
  start_date?: string;
  /**
   * **`Deprecated`**. Use `status_custom` instead.
   *
   * Current status of the task:
   *
   * - `ToDo`: The task is in the "To Do" status.
   * - `Doing`: The task is in the "Doing" status.
   * - `Done`: The task is in the "Done" status.
   * - **null**: The task is in the "Backlog" status.
   */
  status?: string;
  status_custom?: StatusCustom;
  /**
   * The title of the task.
   */
  title?: string;
  /**
   * The ID of the user who created the task.
   */
  user_id?: string;
  /**
   * The ID of the parent task.
   */
  parent_id?: string;
  /**
   * The number of subtasks the given task has.
   */
  subtask_count?: string;
};
export namespace TaskResponse {
  /**
   * The color assigned to the task.
   */
  export enum color {
    _F03621 = '#f03621',
    _F76363 = '#f76363',
    _FF8B00 = '#ff8b00',
    _FFBF00 = '#ffbf00',
    _8AC917 = '#8ac917',
    _5A9216 = '#5a9216',
    _00C7CF = '#00c7cf',
    _478BFF = '#478bff',
    _1D5ECC = '#1d5ecc',
    _8F0099 = '#8f0099',
    _7E828E = '#7e828e',
  }
}

