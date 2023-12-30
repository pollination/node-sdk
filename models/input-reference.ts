/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.46.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An input parameter reference which is not a file or a folder.  For a file or a folder use InputFileReference, InputFolderReference or InputPathReference instead.
 * @export
 * @interface InputReference
 */
export interface InputReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof InputReference
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof InputReference
     */
    type?: string;
    /**
     * The name of the DAG input variable
     * @type {string}
     * @memberof InputReference
     */
    variable: string;
}


