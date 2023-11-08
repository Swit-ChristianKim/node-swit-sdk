/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddTaskFollowParam = {
  /**
   * The ID of the task.
   */
  task_id: string;
  /**
   * The user ID of the collaborator. If both user_id and user_ids parameters are entered, priority is applied based on the value of the user_id parameter.(user_id랑 user_ids에 모두 값이 들어가 있으면, user_ids 기준으로 적용됨)
   */
  user_id?: string;
  /**
   * User IDs of collaborators. If both user_id and user_ids parameters are entered, priority is applied based on the value of the user_id parameter. (user_id랑 user_ids에 모두 값이 들어가 있으면, user_ids 기준으로 적용됨)
   */
  user_ids?: Array<string>;
};

