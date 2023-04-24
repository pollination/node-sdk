/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.38.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface SubscriptionUpdate
 */
export interface SubscriptionUpdate {
    /**
     * The Paddle Plan ID to change the subscription to.
     * @type {number}
     * @memberof SubscriptionUpdate
     */
    plan_id?: number;
    /**
     * The number of times this subscription is purchased
     * @type {number}
     * @memberof SubscriptionUpdate
     */
    quantity?: number;
}


