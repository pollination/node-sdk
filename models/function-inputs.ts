/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.10
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FunctionArtifact } from './function-artifact';
import { FunctionParameterIn } from './function-parameter-in';

/**
 * The Inputs of a Function
 * @export
 * @interface FunctionInputs
 */
export interface FunctionInputs {
    /**
     * 
     * @type {Array<FunctionArtifact>}
     * @memberof FunctionInputs
     */
    artifacts?: Array<FunctionArtifact>;
    /**
     * 
     * @type {Array<FunctionParameterIn>}
     * @memberof FunctionInputs
     */
    parameters?: Array<FunctionParameterIn>;
}


