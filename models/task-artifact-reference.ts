/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TaskReference } from './task-reference';

/**
 * A Task Artifact Reference
 * @export
 * @interface TaskArtifactReference
 */
export interface TaskArtifactReference {
    /**
     * The name of the task to pull output data from
     * @type {string}
     * @memberof TaskArtifactReference
     */
    name: string;
    /**
     * 
     * @type {TaskReference}
     * @memberof TaskArtifactReference
     */
    type?: TaskReference;
    /**
     * The name of the task output variable
     * @type {string}
     * @memberof TaskArtifactReference
     */
    variable: string;
}


