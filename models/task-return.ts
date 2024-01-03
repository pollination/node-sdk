/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A Task return output that exposes the values from a function or a DAG.
 * @export
 * @interface TaskReturn
 */
export interface TaskReturn {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof TaskReturn
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof TaskReturn
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof TaskReturn
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TaskReturn
     */
    type?: string;
}


