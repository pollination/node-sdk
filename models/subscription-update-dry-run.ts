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


import { Quota } from './quota';

/**
 * 
 * @export
 * @interface SubscriptionUpdateDryRun
 */
export interface SubscriptionUpdateDryRun {
    /**
     * A list of quotas exceeded by a proposed subscription update
     * @type {Array<Quota>}
     * @memberof SubscriptionUpdateDryRun
     */
    exceeded_quotas?: Array<Quota>;
}


