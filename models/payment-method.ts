/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { CardType } from './card-type';
// May contain unused imports in some cases
// @ts-ignore
import type { PaymentMethodEnum } from './payment-method-enum';

/**
 * 
 * @export
 * @interface PaymentMethod
 */
export interface PaymentMethod {
    /**
     * 
     * @type {CardType}
     * @memberof PaymentMethod
     */
    'card_type'?: CardType;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethod
     */
    'expiry_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethod
     */
    'last_four_digits'?: string;
    /**
     * 
     * @type {PaymentMethodEnum}
     * @memberof PaymentMethod
     */
    'payment_method': PaymentMethodEnum;
}



