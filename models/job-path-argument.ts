/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.14
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
 * BaseModel with functionality to return the object as a yaml string.
 * @export
 * @interface JobPathArgument
 */
export interface JobPathArgument {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof JobPathArgument
     */
    annotations?: { [key: string]: string; };
    /**
     * Argument name. The name must match one of the input names from Job\'s template which can be a function or DAG.
     * @type {string}
     * @memberof JobPathArgument
     */
    name: string;
    /**
     * The path to source the file from.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof JobPathArgument
     */
    source: HTTP | S3 | ProjectFolder;
    /**
     * 
     * @type {string}
     * @memberof JobPathArgument
     */
    type?: string;
}


