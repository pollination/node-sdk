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
 * A Function Artifact object  This indicates the path within the function context at which a certain file or folder (ie: artifact) can be found.
 * @export
 * @interface FunctionParameterOut
 */
export interface FunctionParameterOut {
    /**
     * Optional description for input parameter.
     * @type {string}
     * @memberof FunctionParameterOut
     */
    description?: string;
    /**
     * Name of the artifact. Must be unique within a task\'s inputs / outputs.
     * @type {string}
     * @memberof FunctionParameterOut
     */
    name: string;
    /**
     * Path to the artifact relative to the working directory where the command is executed.
     * @type {string}
     * @memberof FunctionParameterOut
     */
    path: string;
}


