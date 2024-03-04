/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * List of data attachments to the message.
 *
 * Refer to the [AttachmentView](/docs/user-actions/ref/schemas/attachment-view) section for more details.
 *
 * When making a request with this property, only `attachment_type=custom` is allowed.
 */
export type Attachments = Array<{
  /**
   * The type of the attachment. Note that when making a request, only `custom` is allowed as a value.
   */
  attachment_type?: 'custom' | 'chat' | 'task' | 'mail' | 'calendar' | 'og';
  /**
   * The contents of the attachment.
   */
  values?: Array<Record<string, any>>;
}>;
