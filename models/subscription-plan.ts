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


import { AccountType } from './account-type';
import { BillingOption } from './billing-option';
import { PlanType } from './plan-type';
import { QuotaPlan } from './quota-plan';

/**
 * 
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
     * The billing options for this plan
     * @type {Array<BillingOption>}
     * @memberof SubscriptionPlan
     */
    billing_options?: Array<BillingOption>;
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
    /**
     * The type of plan
     * @type {PlanType}
     * @memberof SubscriptionPlan
     */
    type: PlanType;
}


