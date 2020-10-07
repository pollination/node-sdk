/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.9.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InputReference } from './input-reference';

/**
 * An Input Artifact Reference
 * @export
 * @interface InputArtifactReference
 */
export interface InputArtifactReference {
    /**
     * 
     * @type {InputReference}
     * @memberof InputArtifactReference
     */
    type?: InputReference;
    /**
     * The name of the DAG input variable
     * @type {string}
     * @memberof InputArtifactReference
     */
    variable: string;
}


