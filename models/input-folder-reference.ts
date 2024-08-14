/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An input folder reference
 * @export
 * @interface InputFolderReference
 */
export interface InputFolderReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof InputFolderReference
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof InputFolderReference
     */
    'type'?: string;
    /**
     * The name of the DAG input variable
     * @type {string}
     * @memberof InputFolderReference
     */
    'variable': string;
}

