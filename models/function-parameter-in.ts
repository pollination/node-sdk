/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.9.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A Function Parameter  Parameter indicate a passed string parameter to a service template with an optional default value.
 * @export
 * @interface FunctionParameterIn
 */
export interface FunctionParameterIn {
    /**
     * Default value to use for an input parameter if a value was not supplied.
     * @type {string}
     * @memberof FunctionParameterIn
     */
    _default?: string;
    /**
     * Optional description for input parameter.
     * @type {string}
     * @memberof FunctionParameterIn
     */
    description?: string;
    /**
     * Name is the parameter name. must be unique within a task\'s inputs.
     * @type {string}
     * @memberof FunctionParameterIn
     */
    name: string;
    /**
     * Whether this value must be specified in a task argument.
     * @type {boolean}
     * @memberof FunctionParameterIn
     */
    required?: boolean;
}


