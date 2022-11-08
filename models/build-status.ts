/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.32.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BuildStatusEnum } from './build-status-enum';

/**
 * 
 * @export
 * @interface BuildStatus
 */
export interface BuildStatus {
    /**
     * The date and time the build was created
     * @type {string}
     * @memberof BuildStatus
     */
    created_at?: string;
    /**
     * The date and time the build finished
     * @type {string}
     * @memberof BuildStatus
     */
    finished_at?: string;
    /**
     * The date and time the build started
     * @type {string}
     * @memberof BuildStatus
     */
    started_at?: string;
    /**
     * The status of the build
     * @type {BuildStatusEnum}
     * @memberof BuildStatus
     */
    status: BuildStatusEnum;
}


