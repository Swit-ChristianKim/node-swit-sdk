/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddCompanyUserParam = {
  /**
   * The language setting of the user.
   */
  language?: AddCompanyUserParam.language;
  /**
   * The status message of the user.
   */
  msg?: string;
  /**
   * The telephone number of the user.
   */
  tel?: string;
  /**
   * The timezone of the user.
   */
  timezone?: string;
  /**
   * The email of the user.
   */
  user_email: string;
  /**
   * The name of the user.
   */
  user_name: string;
};

export namespace AddCompanyUserParam {

  /**
   * The language setting of the user.
   */
  export enum language {
    EN = 'en',
    KO = 'ko',
  }


}

