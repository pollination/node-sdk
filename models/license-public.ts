/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { LicenseType } from './license-type';
import { Metadata } from './metadata';

/**
 * 
 * @export
 * @interface LicensePublic
 */
export interface LicensePublic {
    /**
     * 
     * @type {number}
     * @memberof LicensePublic
     */
    allowed_activations: number;
    /**
     * 
     * @type {string}
     * @memberof LicensePublic
     */
    created_at: string;
    /**
     * 
     * @type {string}
     * @memberof LicensePublic
     */
    id: string;
    /**
     * The key used to activate this license. Treat this like a password.
     * @type {string}
     * @memberof LicensePublic
     */
    key: string;
    /**
     * 
     * @type {number}
     * @memberof LicensePublic
     */
    lease_duration: number;
    /**
     * 
     * @type {Array<Metadata>}
     * @memberof LicensePublic
     */
    metadata: Array<Metadata>;
    /**
     * 
     * @type {string}
     * @memberof LicensePublic
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof LicensePublic
     */
    product_id: string;
    /**
     * 
     * @type {boolean}
     * @memberof LicensePublic
     */
    revoked: boolean;
    /**
     * 
     * @type {number}
     * @memberof LicensePublic
     */
    server_sync_grace_period: number;
    /**
     * 
     * @type {number}
     * @memberof LicensePublic
     */
    server_sync_interval: number;
    /**
     * 
     * @type {boolean}
     * @memberof LicensePublic
     */
    suspended: boolean;
    /**
     * 
     * @type {number}
     * @memberof LicensePublic
     */
    total_activations: number;
    /**
     * 
     * @type {number}
     * @memberof LicensePublic
     */
    total_deactivations: number;
    /**
     * 
     * @type {LicenseType}
     * @memberof LicensePublic
     */
    type: LicenseType;
    /**
     * 
     * @type {string}
     * @memberof LicensePublic
     */
    updated_at: string;
    /**
     * 
     * @type {number}
     * @memberof LicensePublic
     */
    validity: number;
}


