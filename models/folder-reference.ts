/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.32.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Reference to a folder.
 * @export
 * @interface FolderReference
 */
export interface FolderReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof FolderReference
     */
    annotations?: { [key: string]: string; };
    /**
     * Relative path to a folder.
     * @type {string}
     * @memberof FolderReference
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof FolderReference
     */
    type?: string;
}


