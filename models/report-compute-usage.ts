/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { JobComputeUsage } from './job-compute-usage';

/**
 * A report on cloud compute usage for an account
 * @export
 * @interface ReportComputeUsage
 */
export interface ReportComputeUsage {
    /**
     * 
     * @type {string}
     * @memberof ReportComputeUsage
     */
    'account_id': string;
    /**
     * 
     * @type {string}
     * @memberof ReportComputeUsage
     */
    'created_at'?: string;
    /**
     * 
     * @type {Array<JobComputeUsage>}
     * @memberof ReportComputeUsage
     */
    'data': Array<JobComputeUsage>;
    /**
     * 
     * @type {string}
     * @memberof ReportComputeUsage
     */
    'from_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportComputeUsage
     */
    'to_date'?: string;
}

