/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.30.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PausedReason } from './paused-reason';
import { PaymentMethod } from './payment-method';
import { SubscriptionPayment } from './subscription-payment';

/**
 * 
 * @export
 * @interface BillingInfo
 */
export interface BillingInfo {
    /**
     * The url to cancel the subscription
     * @type {string}
     * @memberof BillingInfo
     */
    cancel_url: string;
    /**
     * The last payment made
     * @type {SubscriptionPayment}
     * @memberof BillingInfo
     */
    last_payment: SubscriptionPayment;
    /**
     * The last payment made
     * @type {SubscriptionPayment}
     * @memberof BillingInfo
     */
    next_payment?: SubscriptionPayment;
    /**
     * The date the subscription was paused
     * @type {string}
     * @memberof BillingInfo
     */
    paused_at?: string;
    /**
     * The date the subscription will be paused from
     * @type {string}
     * @memberof BillingInfo
     */
    paused_from?: string;
    /**
     * The reason the subscription was paused
     * @type {PausedReason}
     * @memberof BillingInfo
     */
    paused_reason?: PausedReason;
    /**
     * The payment method used
     * @type {PaymentMethod}
     * @memberof BillingInfo
     */
    payment_information: PaymentMethod;
    /**
     * The date the subscription was created
     * @type {string}
     * @memberof BillingInfo
     */
    signup_date: string;
    /**
     * The url to update the billing info
     * @type {string}
     * @memberof BillingInfo
     */
    update_url: string;
    /**
     * The email used for billing on this subscription
     * @type {string}
     * @memberof BillingInfo
     */
    user_email: string;
}


