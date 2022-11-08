/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.32.0
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
 * A file or a folder output.
 * @export
 * @interface StepPathOutput
 */
export interface StepPathOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepPathOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof StepPathOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof StepPathOutput
     */
    name: string;
    /**
     * Path to the output file or folder relative to where the function command is executed.
     * @type {string}
     * @memberof StepPathOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof StepPathOutput
     */
    required?: boolean;
    /**
     * The path to source the file from.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof StepPathOutput
     */
    source: HTTP | S3 | ProjectFolder;
    /**
     * 
     * @type {string}
     * @memberof StepPathOutput
     */
    type?: string;
}


