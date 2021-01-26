/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.18
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Plugin Configuration to run on a desktop.
 * @export
 * @interface LocalConfig
 */
export interface LocalConfig {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof LocalConfig
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof LocalConfig
     */
    type?: string;
}


