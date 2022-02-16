/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SubscriptionCreate
 */
export interface SubscriptionCreate {
    /**
     * The name of the account to create subscription for
     * @type {string}
     * @memberof SubscriptionCreate
     */
    account: string;
    /**
     * The ID of the plan to subscribe to
     * @type {number}
     * @memberof SubscriptionCreate
     */
    plan_id: number;
    /**
     * The number of subscriptions to create
     * @type {number}
     * @memberof SubscriptionCreate
     */
    quantity?: number;
}


