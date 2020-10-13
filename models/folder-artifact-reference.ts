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


import { FolderReference } from './folder-reference';

/**
 * A Base reference model
 * @export
 * @interface FolderArtifactReference
 */
export interface FolderArtifactReference {
    /**
     * The path to the file or folder relative to the workflow output folder
     * @type {string}
     * @memberof FolderArtifactReference
     */
    path: string;
    /**
     * 
     * @type {FolderReference}
     * @memberof FolderArtifactReference
     */
    type?: FolderReference;
}


