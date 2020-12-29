/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.15
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A reference to a fixed value.
 * @export
 * @interface ValueListReference
 */
export interface ValueListReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof ValueListReference
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ValueListReference
     */
    type?: string;
    /**
     * A fixed value for this reference.
     * @type {Array<any>}
     * @memberof ValueListReference
     */
    value: Array<any>;
}


