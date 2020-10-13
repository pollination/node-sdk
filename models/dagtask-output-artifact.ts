/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Output artifact for a DAG task.  The name must correspond to an output artifact from the template function the task refers to.
 * @export
 * @interface DAGTaskOutputArtifact
 */
export interface DAGTaskOutputArtifact {
    /**
     * The name of the output variable
     * @type {string}
     * @memberof DAGTaskOutputArtifact
     */
    name: string;
    /**
     * The path where the artifact should be saved relative to the DAG folder.
     * @type {string}
     * @memberof DAGTaskOutputArtifact
     */
    path?: string;
}


