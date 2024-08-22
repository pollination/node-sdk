/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { OrganizationMemberUsage } from './organization-member-usage';

/**
 * A report on compute usage by organisation members
 * @export
 * @interface ReportOrganizationMemberUsage
 */
export interface ReportOrganizationMemberUsage {
    /**
     * 
     * @type {string}
     * @memberof ReportOrganizationMemberUsage
     */
    'account_id': string;
    /**
     * 
     * @type {string}
     * @memberof ReportOrganizationMemberUsage
     */
    'created_at'?: string;
    /**
     * 
     * @type {Array<OrganizationMemberUsage>}
     * @memberof ReportOrganizationMemberUsage
     */
    'data': Array<OrganizationMemberUsage>;
    /**
     * 
     * @type {string}
     * @memberof ReportOrganizationMemberUsage
     */
    'from_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportOrganizationMemberUsage
     */
    'to_date'?: string;
}

