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



/**
 * An input parameter used within the DAG.
 * @export
 * @interface DAGInputParameter
 */
export interface DAGInputParameter {
    /**
     * Optional annotations for Queenbee objects.
     * @type {{ [key: string]: string; }}
     * @memberof DAGInputParameter
     */
    annotations?: { [key: string]: string; };
    /**
     * Default value to use for an input parameter if a value was not supplied.
     * @type {string}
     * @memberof DAGInputParameter
     */
    _default?: string;
    /**
     * Optional description for input parameter.
     * @type {string}
     * @memberof DAGInputParameter
     */
    description?: string;
    /**
     * Name is the parameter name. must be unique within a task\'s inputs.
     * @type {string}
     * @memberof DAGInputParameter
     */
    name: string;
    /**
     * Whether this value must be specified in a task argument.
     * @type {boolean}
     * @memberof DAGInputParameter
     */
    required?: boolean;
}


