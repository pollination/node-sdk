/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { ArgumentParameter } from './argument-parameter';
import { SimulationInputArtifact } from './simulation-input-artifact';

/**
 * Simulation Arguments
 * @export
 * @interface SimulationInputs
 */
export interface SimulationInputs {
    /**
     * A list of input artifacts
     * @type {Array<SimulationInputArtifact>}
     * @memberof SimulationInputs
     */
    artifacts?: Array<SimulationInputArtifact>;
    /**
     * A list of input parameters
     * @type {Array<ArgumentParameter>}
     * @memberof SimulationInputs
     */
    parameters?: Array<ArgumentParameter>;
}


