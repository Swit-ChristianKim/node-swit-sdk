/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalCategoryListResponse } from '../models/ApprovalCategoryListResponse';
import type { ApprovalListResponse } from '../models/ApprovalListResponse';
import type { CreateApprovalParam } from '../models/CreateApprovalParam';
import type { CreateApprovalResponse } from '../models/CreateApprovalResponse';
import type { GetApprovalCategoryInfoResponse } from '../models/GetApprovalCategoryInfoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApprovalService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Draft a request
   * Creates a request draft for approval.
   * @returns any Successfully created the request.
   * @throws ApiError
   */
  public approvalCreateApproval({
    requestBody,
  }: {
    requestBody: CreateApprovalParam,
  }): CancelablePromise<{
    data?: CreateApprovalResponse;
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/approval.create',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
  /**
   * List out received requests
   * Lists out a given number of requests from the user's inbox. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the requests received.
   * @throws ApiError
   */
  public approvalGetApprovalListReceived({
    offset,
    limit,
    filterKeyword,
    filterIsBookmarked,
    filterApprovalCategoryIds,
    filterEndDate,
    type,
    filterStartDate,
    filterApprovalStatus,
  }: {
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
    /**
     * The number of objects to retrieve.
     */
    limit?: number,
    /**
     * Filter requests whose ID, title, submitter, approvers, recipients match this keyword.
     */
    filterKeyword?: string,
    /**
     * Filter requests that are starred. Pass `1` to this parameter if you'd like to use this filter.
     */
    filterIsBookmarked?: string,
    /**
     * Filter requests by template in use. Pass a comma-delimited list of template IDs. If you want to include requests with no template, add `none` to the list.
     */
    filterApprovalCategoryIds?: string,
    /**
     * Filter requests submitted at or before this datetime. Use the ISO 8601 format in UTC.
     */
    filterEndDate?: string,
    /**
     * The tab from which to retrieve requests.
     * - `me`: **My approvals**
     * - `me_pending`: **My approvals** > **Pending**
     * - `me_completed`: **My approvals** > **Completed**
     * - `team`: **Circulated to my team**
     * - `referrer_team`: **Received by my team**
     * - `referrer`: **CC'd to me**
     */
    type?: 'me' | 'me_pending' | 'me_completed' | 'team' | 'referrer_team' | 'referrer',
    /**
     * Filter requests submitted at or after this datetime. Use the ISO 8601 format in UTC.
     */
    filterStartDate?: string,
    /**
     * Filter requests whose status matches this setting.
     * - `1`: Waiting
     * - `2`: Approved
     * - `3`: Denied
     *
     * You can pass a comma-delimited list of status codes (for example, `1,2`).
     */
    filterApprovalStatus?: string,
  }): CancelablePromise<{
    data?: ApprovalListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/approval.list.received',
      query: {
        'offset': offset,
        'limit': limit,
        'filter.keyword': filterKeyword,
        'filter.is_bookmarked': filterIsBookmarked,
        'filter.approval_category_ids': filterApprovalCategoryIds,
        'filter.end_date': filterEndDate,
        'type': type,
        'filter.start_date': filterStartDate,
        'filter.approval_status': filterApprovalStatus,
      },
    });
  }
  /**
   * List out submitted requests
   * Lists out a given number of requests from the user's submissions. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the requests submitted.
   * @throws ApiError
   */
  public approvalGetApprovalListSent({
    filterKeyword,
    filterIsBookmarked,
    filterApprovalCategoryIds,
    filterStartDate,
    filterApprovalStatus,
    type,
    limit,
    filterEndDate,
    offset,
  }: {
    /**
     * Filter requests whose ID, title, submitter, approvers, recipients match this keyword.
     */
    filterKeyword?: string,
    /**
     * Filter requests that are starred. Pass `1` to this parameter if you'd like to use this filter.
     */
    filterIsBookmarked?: '0' | '1',
    /**
     * Filter requests by template in use. Pass a comma-delimited list of template IDs. If you want to include requests with no template, add `none` to the list.
     */
    filterApprovalCategoryIds?: string,
    /**
     * Filter requests submitted at or after this datetime. Use the ISO 8601 format in UTC.
     */
    filterStartDate?: string,
    /**
     * Filter requests whose status matches this setting.
     * - `1`: Waiting
     * - `2`: Approved
     * - `3`: Denied
     *
     * You can pass a comma-delimited list of status codes (for example, `1,2`).
     */
    filterApprovalStatus?: string,
    /**
     * The tab from which to retrieve requests.
     * - `me`: **My submissions**
     * - `team`: **Circulated to my team**
     */
    type?: string,
    /**
     * The number of requests to retrieve.
     */
    limit?: number,
    /**
     * Filter requests submitted at or after this datetime. Use the ISO 8601 format in UTC.
     */
    filterEndDate?: string,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
  }): CancelablePromise<{
    data?: ApprovalListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/approval.list.sent',
      query: {
        'filter.keyword': filterKeyword,
        'filter.is_bookmarked': filterIsBookmarked,
        'filter.approval_category_ids': filterApprovalCategoryIds,
        'filter.start_date': filterStartDate,
        'filter.approval_status': filterApprovalStatus,
        'type': type,
        'limit': limit,
        'filter.end_date': filterEndDate,
        'offset': offset,
      },
    });
  }
  /**
   * List out drafts
   * Lists out a given number of request drafts. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the drafts.
   * @throws ApiError
   */
  public approvalGetApprovalListTemp({
    limit,
    offset,
  }: {
    /**
     * The number of drafts to retrieve.
     */
    limit?: number,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
  }): CancelablePromise<{
    data?: ApprovalListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/approval.list.temp',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
  /**
   * Get a template's info
   * Retrieves information about a request template.
   * @returns any Successfully retrieved information about the template.
   * @throws ApiError
   */
  public approvalGetApprovalCategoryInfo({
    approvalCategoryId,
  }: {
    /**
     * The ID of the template to view.
     */
    approvalCategoryId?: string,
  }): CancelablePromise<{
    data?: GetApprovalCategoryInfoResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/approval.category.info',
      query: {
        'approval_category_id': approvalCategoryId,
      },
    });
  }
  /**
   * List out templates
   * Lists out a given number of request templates. This method uses the Swit API's [pagination scheme](/docs/core1/up49a503iuknu-pagination-scheme).
   * @returns any Successfully retrieved the templates.
   * @throws ApiError
   */
  public approvalGetApprovalCategoryList({
    limit,
    offset,
  }: {
    /**
     * The number of objects to retrieve.
     */
    limit?: number,
    /**
     * Pass the `offset` string returned by the previous call to skip already returned entries.
     */
    offset?: string,
  }): CancelablePromise<{
    data?: ApprovalCategoryListResponse;
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/approval.category.list',
      query: {
        'limit': limit,
        'offset': offset,
      },
    });
  }
}
