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
 * An Item Reference.
 * @export
 * @interface ItemReference
 */
export interface ItemReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof ItemReference
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ItemReference
     */
    type?: string;
    /**
     * The name of the looped item variable (use dot notation for nested json values)
     * @type {string}
     * @memberof ItemReference
     */
    variable?: string;
}


