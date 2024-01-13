/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { BillingInfo } from './billing-info';
import { PlanType } from './plan-type';

/**
 * 
 * @export
 * @interface Subscription
 */
export interface Subscription {
    /**
     * The billing info for the subscription
     * @type {BillingInfo}
     * @memberof Subscription
     */
    billing_info?: BillingInfo;
    /**
     * The ID of this subscription
     * @type {string}
     * @memberof Subscription
     */
    external_id?: string;
    /**
     * The unique ID of this subscription
     * @type {string}
     * @memberof Subscription
     */
    id: string;
    /**
     * The owner of the repository
     * @type {AccountPublic}
     * @memberof Subscription
     */
    owner: AccountPublic;
    /**
     * The end of the current subscription period
     * @type {string}
     * @memberof Subscription
     */
    period_end: string;
    /**
     * The start of the current subscription period
     * @type {string}
     * @memberof Subscription
     */
    period_start: string;
    /**
     * The number of times to multiply the plan limit by
     * @type {number}
     * @memberof Subscription
     */
    plan_multiplier?: number;
    /**
     * The slug of the plan used to create this subscription
     * @type {string}
     * @memberof Subscription
     */
    plan_slug: string;
    /**
     * The type of subscription
     * @type {PlanType}
     * @memberof Subscription
     */
    type: PlanType;
}


