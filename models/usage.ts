/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DailyUsage } from './daily-usage';

/**
 * 
 * @export
 * @interface Usage
 */
export interface Usage {
    /**
     * cpu usage
     * @type {number}
     * @memberof Usage
     */
    cpu?: number;
    /**
     * daily breakdown of usage
     * @type {Array<DailyUsage>}
     * @memberof Usage
     */
    daily_usage?: Array<DailyUsage>;
    /**
     * The end date for this usage aggregation
     * @type {string}
     * @memberof Usage
     */
    end: string;
    /**
     * failed usage
     * @type {number}
     * @memberof Usage
     */
    failed?: number;
    /**
     * memory usage
     * @type {number}
     * @memberof Usage
     */
    memory?: number;
    /**
     * The start date for this usage aggregation
     * @type {string}
     * @memberof Usage
     */
    start: string;
    /**
     * succeeded usage
     * @type {number}
     * @memberof Usage
     */
    succeeded?: number;
}


