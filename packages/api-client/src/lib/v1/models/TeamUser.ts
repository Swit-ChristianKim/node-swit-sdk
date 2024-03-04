/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type TeamUser = {
  /**
   * The date and time the team was created.
   */
  created?: string;
  /**
   * Whether the team is the user's primary team or not.
   */
  main_dept_yn?: TeamUser.main_dept_yn;
  /**
   * The ID of the team.
   */
  team_id?: string;
  /**
   * The name of the team.
   */
  team_name?: string;
};
export namespace TeamUser {
  /**
   * Whether the team is the user's primary team or not.
   */
  export enum main_dept_yn {
    Y = 'Y',
    N = 'N',
  }
}

