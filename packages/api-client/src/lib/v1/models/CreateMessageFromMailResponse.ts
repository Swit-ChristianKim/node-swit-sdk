/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object wrapping a Swit resource.
 */
export type CreateMessageFromMailResponse = {
  /**
   * The properties of a message.
   */
  message?: {
    /**
     * The ID of the channel the email was shared.
     */
    channel_id?: string;
    /**
     * The date and time at which the email was shared.
     */
    created?: string;
    /**
     * The ID of the message.
     */
    message_id?: string;
  };
};

