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


import { FolderArtifactReference } from './folder-artifact-reference';
import { TaskArtifactReference } from './task-artifact-reference';

/**
 * An artifact sourced from within the DAG that is exposed as an output
 * @export
 * @interface DAGOutputArtifact
 */
export interface DAGOutputArtifact {
    /**
     * The task reference to pull this output variable from. Note, this must be an output variable.
     * @type {TaskArtifactReference | FolderArtifactReference}
     * @memberof DAGOutputArtifact
     */
    from: TaskArtifactReference | FolderArtifactReference;
    /**
     * The name of the output variable
     * @type {string}
     * @memberof DAGOutputArtifact
     */
    name: string;
}


