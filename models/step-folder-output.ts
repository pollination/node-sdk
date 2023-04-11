/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.37.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { HTTP } from './http';
import { ProjectFolder } from './project-folder';
import { S3 } from './s3';

/**
 * A folder output.
 * @export
 * @interface StepFolderOutput
 */
export interface StepFolderOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepFolderOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepFolderOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof StepFolderOutput
     */
    name: string;
    /**
     * Path to the output folder relative to where the function command is executed.
     * @type {string}
     * @memberof StepFolderOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof StepFolderOutput
     */
    required?: boolean;
    /**
     * The path to source the file from.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof StepFolderOutput
     */
    source: HTTP | S3 | ProjectFolder;
    /**
     * 
     * @type {string}
     * @memberof StepFolderOutput
     */
    type?: string;
}


