/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.11.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A Task output that returns a file or a folder output from a function or a DAG.
 * @export
 * @interface TaskPathReturn
 */
export interface TaskPathReturn {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof TaskPathReturn
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof TaskPathReturn
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof TaskPathReturn
     */
    name: string;
    /**
     * Path to the output artifact relative to where the function command is executed.
     * @type {string}
     * @memberof TaskPathReturn
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof TaskPathReturn
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TaskPathReturn
     */
    type?: string;
}


