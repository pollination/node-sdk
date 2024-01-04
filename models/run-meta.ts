/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ResourcesDuration } from './resources-duration';
import { RunProgress } from './run-progress';

/**
 * 
 * @export
 * @interface RunMeta
 */
export interface RunMeta {
    /**
     * progress of the run
     * @type {RunProgress}
     * @memberof RunMeta
     */
    progress?: RunProgress;
    /**
     * resource usage
     * @type {ResourcesDuration}
     * @memberof RunMeta
     */
    resources_duration?: ResourcesDuration;
}


