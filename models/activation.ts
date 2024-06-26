/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { Location } from './location';
import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface Activation
 */
export interface Activation {
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    app_version?: string;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    hostname?: string;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    last_synced_at: string;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    lease_expires_at?: string;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    license_id?: string;
    /**
     * 
     * @type {Location}
     * @memberof Activation
     */
    location: Location;
    /**
     * 
     * @type {Array<Metadata>}
     * @memberof Activation
     */
    metadata?: Array<Metadata>;
    /**
     * 
     * @type {boolean}
     * @memberof Activation
     */
    offline: boolean;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    os?: string;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    os_version?: string;
    /**
     * 
     * @type {string}
     * @memberof Activation
     */
    updated_at: string;
    /**
     * The user associated with the activation
     * @type {AccountPublic}
     * @memberof Activation
     */
    user?: AccountPublic;
}


