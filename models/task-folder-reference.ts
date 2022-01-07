/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.23.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A reference to a folder that is generated in a task.
 * @export
 * @interface TaskFolderReference
 */
export interface TaskFolderReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof TaskFolderReference
     */
    annotations?: { [key: string]: string; };
    /**
     * The name of the task to pull output data from.
     * @type {string}
     * @memberof TaskFolderReference
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TaskFolderReference
     */
    type?: string;
    /**
     * The name of the variable.
     * @type {string}
     * @memberof TaskFolderReference
     */
    variable: string;
}


