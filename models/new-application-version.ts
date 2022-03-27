/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.28.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface NewApplicationVersion
 */
export interface NewApplicationVersion {
    /**
     * Some useful release notes so users know what has changed in this version
     * @type {string}
     * @memberof NewApplicationVersion
     */
    release_notes?: string;
    /**
     * The tag for this new version of the application
     * @type {string}
     * @memberof NewApplicationVersion
     */
    tag: string;
}


