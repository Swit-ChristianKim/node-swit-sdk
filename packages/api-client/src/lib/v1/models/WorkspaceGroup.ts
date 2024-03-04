/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The properties of a group in a workspace.
 */
export type WorkspaceGroup = {
  /**
   * The date and time at which the group was created.
   */
  created?: string;
  /**
   * The description of the group.
   */
  description?: string;
  /**
   * The name of the group.
   */
  grp_name?: string;
  /**
   * The ID of the group.
   */
  guser_id?: string;
  /**
   * The status of the group.
   *
   * - `act`: Active channel.
   * - `leave`: Deleted channel.
   */
  status?: WorkspaceGroup.status;
  /**
   * The number of group members.
   */
  user_count?: number;
  /**
   * The ID of the workspace where the group belongs.
   */
  ws_id?: string;
};
export namespace WorkspaceGroup {
  /**
   * The status of the group.
   *
   * - `act`: Active channel.
   * - `leave`: Deleted channel.
   */
  export enum status {
    ACT = 'act',
    LEAVE = 'leave',
  }
}

