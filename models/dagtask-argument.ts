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


import { DAGTaskArtifactArgument } from './dagtask-artifact-argument';
import { DAGTaskParameterArgument } from './dagtask-parameter-argument';

/**
 * DAG task argument.  These arguments should match the inputs from the template referenced in the task.
 * @export
 * @interface DAGTaskArgument
 */
export interface DAGTaskArgument {
    /**
     * A list of input artifacts to pass to the task
     * @type {Array<DAGTaskArtifactArgument>}
     * @memberof DAGTaskArgument
     */
    artifacts?: Array<DAGTaskArtifactArgument>;
    /**
     * A list of input parameters to pass to the task
     * @type {Array<DAGTaskParameterArgument>}
     * @memberof DAGTaskArgument
     */
    parameters?: Array<DAGTaskParameterArgument>;
}


