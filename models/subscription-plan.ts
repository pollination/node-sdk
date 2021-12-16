/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.21.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountType } from './account-type';
import { QuotaPlan } from './quota-plan';

/**
 * A Subscription plan
 * @export
 * @interface SubscriptionPlan
 */
export interface SubscriptionPlan {
    /**
     * The types of account to which the plan can be applied
     * @type {Set<AccountType>}
     * @memberof SubscriptionPlan
     */
    account_types: Set<AccountType>;
    /**
     * A name of the config plan used to create this subscription
     * @type {string}
     * @memberof SubscriptionPlan
     */
    name: string;
    /**
     * A list of quota plans for a given subscription
     * @type {Array<QuotaPlan>}
     * @memberof SubscriptionPlan
     */
    quotas?: Array<QuotaPlan>;
    /**
     * A slug of the config plan used to create this subscription
     * @type {string}
     * @memberof SubscriptionPlan
     */
    slug: string;
}


