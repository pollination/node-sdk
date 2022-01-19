/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.25.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A reference to a fixed file.
 * @export
 * @interface ValueFileReference
 */
export interface ValueFileReference {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof ValueFileReference
     */
    annotations?: { [key: string]: string; };
    /**
     * A fixed value for this reference.
     * @type {string}
     * @memberof ValueFileReference
     */
    path: string;
    /**
     * 
     * @type {string}
     * @memberof ValueFileReference
     */
    type?: string;
}


