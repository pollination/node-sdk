/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.17.0-beta.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface DailyUsage
 */
export interface DailyUsage {
    /**
     * cpu usage
     * @type {number}
     * @memberof DailyUsage
     */
    cpu?: number;
    /**
     * The day this usage was aggregated for
     * @type {string}
     * @memberof DailyUsage
     */
    date: string;
    /**
     * failed usage
     * @type {number}
     * @memberof DailyUsage
     */
    failed?: number;
    /**
     * memory usage
     * @type {number}
     * @memberof DailyUsage
     */
    memory?: number;
    /**
     * succeeded usage
     * @type {number}
     * @memberof DailyUsage
     */
    succeeded?: number;
}


