/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ProjectDailyUsage } from './project-daily-usage';

/**
 * 
 * @export
 * @interface ProjectUsage
 */
export interface ProjectUsage {
    /**
     * 
     * @type {number}
     * @memberof ProjectUsage
     */
    cpu?: number;
    /**
     * 
     * @type {Array<ProjectDailyUsage>}
     * @memberof ProjectUsage
     */
    daily_usage?: Array<ProjectDailyUsage>;
    /**
     * 
     * @type {string}
     * @memberof ProjectUsage
     */
    end: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectUsage
     */
    failed?: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectUsage
     */
    memory?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectUsage
     */
    start: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectUsage
     */
    succeeded?: number;
}


