/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.21.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { QuotaExtension } from './quota-extension';
import { SubscriptionPlan } from './subscription-plan';

/**
 * 
 * @export
 * @interface PollinationSubscription
 */
export interface PollinationSubscription {
    /**
     * The ID of the account this subscription applies to
     * @type {string}
     * @memberof PollinationSubscription
     */
    account_id: string;
    /**
     * The end of the current subscription period
     * @type {string}
     * @memberof PollinationSubscription
     */
    current_period_end: string;
    /**
     * The_start of the current subscription period
     * @type {string}
     * @memberof PollinationSubscription
     */
    current_period_start: string;
    /**
     * The ID of this subscription
     * @type {string}
     * @memberof PollinationSubscription
     */
    external_id?: string;
    /**
     * The unique ID of this subscription
     * @type {string}
     * @memberof PollinationSubscription
     */
    id?: string;
    /**
     * A list of quota extension plans for a given subscription
     * @type {Array<QuotaExtension>}
     * @memberof PollinationSubscription
     */
    quota_extensions?: Array<QuotaExtension>;
    /**
     * A subscription plan
     * @type {SubscriptionPlan}
     * @memberof PollinationSubscription
     */
    subscription_plan: SubscriptionPlan;
}

