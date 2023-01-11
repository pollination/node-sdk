/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.36.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { QuotaType } from './quota-type';

/**
 * 
 * @export
 * @interface Quota
 */
export interface Quota {
    /**
     * The description
     * @type {string}
     * @memberof Quota
     */
    description?: string;
    /**
     * The human-readable name
     * @type {string}
     * @memberof Quota
     */
    display_name?: string;
    /**
     * Whether the limit triggers a blocking response from the server
     * @type {boolean}
     * @memberof Quota
     */
    enforced?: boolean;
    /**
     * Whether the resource usage is greater than or equal to the limit
     * @type {boolean}
     * @memberof Quota
     */
    exceeded?: boolean;
    /**
     * The unique ID for this Quota
     * @type {string}
     * @memberof Quota
     */
    id?: string;
    /**
     * The maximum amount of a resource the account can consume
     * @type {number}
     * @memberof Quota
     */
    limit?: number;
    /**
     * The quota owner
     * @type {AccountPublic}
     * @memberof Quota
     */
    owner: AccountPublic;
    /**
     * The start of the quota usage tracking period
     * @type {string}
     * @memberof Quota
     */
    period_start?: string;
    /**
     * Whether consumption is reset to 0 every billing period
     * @type {boolean}
     * @memberof Quota
     */
    resets?: boolean;
    /**
     * The type of resource
     * @type {QuotaType}
     * @memberof Quota
     */
    type: QuotaType;
    /**
     * The unit in which the usage and limit are measured
     * @type {string}
     * @memberof Quota
     */
    unit?: string;
    /**
     * The current amount of a resource allocated to the account linked to the subscription
     * @type {number}
     * @memberof Quota
     */
    usage?: number;
}


