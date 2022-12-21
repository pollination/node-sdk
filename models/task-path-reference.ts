/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.35.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A reference to a file or folder that is generated in a task.
 * @export
 * @interface TaskPathReference
 */
export interface TaskPathReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof TaskPathReference
     */
    annotations?: { [key: string]: string; };
    /**
     * The name of the task to pull output data from.
     * @type {string}
     * @memberof TaskPathReference
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TaskPathReference
     */
    type?: string;
    /**
     * The name of the variable.
     * @type {string}
     * @memberof TaskPathReference
     */
    variable: string;
}


