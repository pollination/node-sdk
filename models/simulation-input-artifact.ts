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


import { HTTPSource } from './httpsource';
import { ProjectFolderSource } from './project-folder-source';
import { S3Source } from './s3-source';
import { SimulationOutputSource } from './simulation-output-source';

/**
 * A workflow Artifact Argument
 * @export
 * @interface SimulationInputArtifact
 */
export interface SimulationInputArtifact {
    /**
     * The name of the artifact
     * @type {string}
     * @memberof SimulationInputArtifact
     */
    name: string;
    /**
     * The source to pull the artifact from
     * @type {HTTPSource | S3Source | ProjectFolderSource | SimulationOutputSource}
     * @memberof SimulationInputArtifact
     */
    source: HTTPSource | S3Source | ProjectFolderSource | SimulationOutputSource;
}


