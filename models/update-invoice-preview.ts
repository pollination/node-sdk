/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.20.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { CardPublic } from './card-public';
import { InvoicePreview } from './invoice-preview';
import { Quota } from './quota';

/**
 * 
 * @export
 * @interface UpdateInvoicePreview
 */
export interface UpdateInvoicePreview {
    /**
     * A list of quotas that would be exceeded by the update
     * @type {Array<Quota>}
     * @memberof UpdateInvoicePreview
     */
    exceeded_quotas?: Array<Quota>;
    /**
     * The invoice that will be finalized right after changes are applied
     * @type {InvoicePreview}
     * @memberof UpdateInvoicePreview
     */
    immediate: InvoicePreview;
    /**
     * The payment method that will be billed when this invoice is due.
     * @type {CardPublic}
     * @memberof UpdateInvoicePreview
     */
    payment_method?: CardPublic;
    /**
     * The invoice that will be finalized at the end of the current billing cycle
     * @type {InvoicePreview}
     * @memberof UpdateInvoicePreview
     */
    upcoming: InvoicePreview;
}


