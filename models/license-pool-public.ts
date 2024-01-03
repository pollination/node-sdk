/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Accessor } from './accessor';
import { AccountPublic } from './account-public';
import { UserPermission } from './user-permission';

/**
 * 
 * @export
 * @interface LicensePoolPublic
 */
export interface LicensePoolPublic {
    /**
     * The entities that can access the license though the pool
     * @type {Array<Accessor>}
     * @memberof LicensePoolPublic
     */
    accessors?: Array<Accessor>;
    /**
     * The number of allowable activations for this license
     * @type {number}
     * @memberof LicensePoolPublic
     */
    allowed_activations: number;
    /**
     * The description of the pool
     * @type {string}
     * @memberof LicensePoolPublic
     */
    description?: string;
    /**
     * The ID of the pool
     * @type {string}
     * @memberof LicensePoolPublic
     */
    id: string;
    /**
     * The ID of the license to which the pool provides access
     * @type {string}
     * @memberof LicensePoolPublic
     */
    license_id: string;
    /**
     * The account that owns the license
     * @type {AccountPublic}
     * @memberof LicensePoolPublic
     */
    owner: AccountPublic;
    /**
     * 
     * @type {UserPermission}
     * @memberof LicensePoolPublic
     */
    permissions: UserPermission;
    /**
     * The pollination product to which this pool provides access
     * @type {string}
     * @memberof LicensePoolPublic
     */
    product: string;
    /**
     * The number of current activations for this license
     * @type {number}
     * @memberof LicensePoolPublic
     */
    total_activations: number;
}


