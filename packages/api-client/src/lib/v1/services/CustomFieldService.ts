/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddCustomFieldParam } from '../models/AddCustomFieldParam';
import type { AddCustomFieldResponse } from '../models/AddCustomFieldResponse';
import type { DeleteCustomFieldParam } from '../models/DeleteCustomFieldParam';
import type { DeleteCustomFieldResponse } from '../models/DeleteCustomFieldResponse';
import type { GetCustomFieldListResponse } from '../models/GetCustomFieldListResponse';
import type { GetUserCustomFieldListResponse } from '../models/GetUserCustomFieldListResponse';
import type { UpdateCustomFieldParam } from '../models/UpdateCustomFieldParam';
import type { UpdateCustomFieldResponse } from '../models/UpdateCustomFieldResponse';
import type { UpdateUserCustomFieldParam } from '../models/UpdateUserCustomFieldParam';
import type { UpdateUserCustomFieldResponse } from '../models/UpdateUserCustomFieldResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CustomFieldService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * List out custom fields
   * `Bot-compatible` Lists out all registered custom fields.
   * @returns any Successfully retrieved the custom fields.
   * @throws ApiError
   */
  public customfieldList(): CancelablePromise<{
    data?: GetCustomFieldListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/customfield.list',
    });
  }
  /**
   * Add a custom field
   * `Bot-compatible` Adds a new custom field for user profiles.
   * @returns any Successfully added the custom field.
   * @throws ApiError
   */
  public customfieldAdd({
    requestBody,
  }: {
    requestBody: AddCustomFieldParam,
  }): CancelablePromise<{
    data?: AddCustomFieldResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/customfield.add',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Delete custom field
   * `Bot-compatible` Deletes a custom field for user profiles.
   * @returns any Successfully deleted the custom field.
   * @throws ApiError
   */
  public customfieldDelete({
    requestBody,
  }: {
    requestBody: DeleteCustomFieldParam,
  }): CancelablePromise<{
    data?: DeleteCustomFieldResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/customfield.delete',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * Update a custom field
   * `Bot-compatible` Updates an existing custom field.
   * @returns any Successfully updated the custom field.
   * @throws ApiError
   */
  public customfieldUpdate({
    requestBody,
  }: {
    requestBody: UpdateCustomFieldParam,
  }): CancelablePromise<{
    data?: UpdateCustomFieldResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/customfield.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * List out a user's custom fields in use
   * `Bot-compatible` Retrieves the custom fields and their values used in a given user's profile.
   * @returns any Successfully retrieved the user's custom field data.
   * @throws ApiError
   */
  public customfieldUserList({
    userId,
  }: {
    /**
     * The ID of the target user.
     */
    userId: string,
  }): CancelablePromise<{
    data?: GetUserCustomFieldListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/customfield.user.list',
      query: {
        'user_id': userId,
      },
    });
  }
  /**
   * Update a user's custom field data
   * `Bot-compatible` Updates the values of the custom fields used in a given user's profile.
   * @returns any Successfully updated the user's custom field data.
   * @throws ApiError
   */
  public customfieldUserUpdate({
    requestBody,
  }: {
    requestBody: UpdateUserCustomFieldParam,
  }): CancelablePromise<{
    data?: UpdateUserCustomFieldResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/customfield.user.update',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
