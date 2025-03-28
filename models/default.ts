/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { HTTP } from './http';
// May contain unused imports in some cases
// @ts-ignore
import type { ProjectFolder } from './project-folder';
// May contain unused imports in some cases
// @ts-ignore
import type { S3 } from './s3';

/**
 * The default source for file if the value is not provided.
 * @export
 * @interface Default
 */
export interface Default {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof Default
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Default
     */
    'type'?: string;
    /**
     * For a HTTP endpoint this can be http://climate.onebuilding.org.
     * @type {string}
     * @memberof Default
     */
    'url': string;
    /**
     * The name of the S3 bucket on the host server.
     * @type {string}
     * @memberof Default
     */
    'bucket': string;
    /**
     * Path to the file holding the AccessKey and SecretAccessKey to authenticate to the bucket. Assumes public bucket access if none are specified.
     * @type {string}
     * @memberof Default
     */
    'credentials_path'?: string;
    /**
     * The HTTP endpoint to reach the S3 bucket.
     * @type {string}
     * @memberof Default
     */
    'endpoint': string;
    /**
     * The path inside the bucket to source artifacts from.
     * @type {string}
     * @memberof Default
     */
    'key': string;
    /**
     * The path to a folder where files and folders can be sourced. For a local filesystem this can be \"C:\\Users\\me\\jobs\\test\".
     * @type {string}
     * @memberof Default
     */
    'path'?: string;
}

