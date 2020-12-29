/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.15
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { Job } from './job';
import { JobStatus } from './job-status';

/**
 * 
 * @export
 * @interface Run
 */
export interface Run {
    /**
     * author
     * @type {AccountPublic}
     * @memberof Run
     */
    author?: AccountPublic;
    /**
     * The generation of this run
     * @type {number}
     * @memberof Run
     */
    generation?: number;
    /**
     * The unique ID for this run
     * @type {string}
     * @memberof Run
     */
    id: string;
    /**
     * 
     * @type {Job}
     * @memberof Run
     */
    job: Job;
    /**
     * owner
     * @type {AccountPublic}
     * @memberof Run
     */
    owner?: AccountPublic;
    /**
     * The status of the run
     * @type {JobStatus}
     * @memberof Run
     */
    status?: JobStatus;
}

