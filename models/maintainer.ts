/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.14.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Maintainer information
 * @export
 * @interface Maintainer
 */
export interface Maintainer {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof Maintainer
     */
    annotations?: { [key: string]: string; };
    /**
     * The email address of the author/maintainer person or organization.
     * @type {string}
     * @memberof Maintainer
     */
    email?: string;
    /**
     * The name of the author/maintainer person or organization.
     * @type {string}
     * @memberof Maintainer
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Maintainer
     */
    type?: string;
}


