/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGInputArtifact } from './daginput-artifact';
import { DAGInputParameter } from './daginput-parameter';

/**
 * Inputs of a DAG.
 * @export
 * @interface DAGInputs
 */
export interface DAGInputs {
    /**
     * A list of artifacts the DAG will use
     * @type {Array<DAGInputArtifact>}
     * @memberof DAGInputs
     */
    artifacts?: Array<DAGInputArtifact>;
    /**
     * A list of parameters the DAG will use as input values
     * @type {Array<DAGInputParameter>}
     * @memberof DAGInputs
     */
    parameters?: Array<DAGInputParameter>;
}

