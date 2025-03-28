/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A reference to a fixed folder.
 * @export
 * @interface ValueFolderReference
 */
export interface ValueFolderReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof ValueFolderReference
     */
    'annotations'?: { [key: string]: string; };
    /**
     * A fixed value for this reference.
     * @type {string}
     * @memberof ValueFolderReference
     */
    'path': string;
    /**
     * 
     * @type {string}
     * @memberof ValueFolderReference
     */
    'type'?: string;
}

