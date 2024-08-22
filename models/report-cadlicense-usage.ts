/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CADLicenseUsage } from './cadlicense-usage';

/**
 * A report on CAD license usage
 * @export
 * @interface ReportCADLicenseUsage
 */
export interface ReportCADLicenseUsage {
    /**
     * 
     * @type {string}
     * @memberof ReportCADLicenseUsage
     */
    'account_id': string;
    /**
     * 
     * @type {string}
     * @memberof ReportCADLicenseUsage
     */
    'created_at'?: string;
    /**
     * 
     * @type {Array<CADLicenseUsage>}
     * @memberof ReportCADLicenseUsage
     */
    'data': Array<CADLicenseUsage>;
    /**
     * 
     * @type {string}
     * @memberof ReportCADLicenseUsage
     */
    'from_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportCADLicenseUsage
     */
    'to_date'?: string;
}

