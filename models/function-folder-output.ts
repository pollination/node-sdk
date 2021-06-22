/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Function Folder output.
 * @export
 * @interface FunctionFolderOutput
 */
export interface FunctionFolderOutput {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FunctionFolderOutput
     */
    annotations?: { [key: string]: string; };
    /**
     * Optional description for output.
     * @type {string}
     * @memberof FunctionFolderOutput
     */
    description?: string;
    /**
     * Output name.
     * @type {string}
     * @memberof FunctionFolderOutput
     */
    name: string;
    /**
     * Path to the output folder relative to where the function command is executed.
     * @type {string}
     * @memberof FunctionFolderOutput
     */
    path: string;
    /**
     * A boolean to indicate if an artifact output is required. A False value makes the artifact optional.
     * @type {boolean}
     * @memberof FunctionFolderOutput
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof FunctionFolderOutput
     */
    type?: string;
}


