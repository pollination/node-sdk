/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.18.1-beta.7
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InvoiceStatus } from './invoice-status';
import { InvoiceStatusTransitions } from './invoice-status-transitions';
import { LineItemList } from './line-item-list';

/**
 * 
 * @export
 * @interface AppDomainsPaymentsEntitiesInvoicePreview
 */
export interface AppDomainsPaymentsEntitiesInvoicePreview {
    /**
     * 
     * @type {boolean}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    auto_advance?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    collection_method: string;
    /**
     * 
     * @type {string}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    hosted_invoice_url?: string;
    /**
     * 
     * @type {LineItemList}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    lines: LineItemList;
    /**
     * 
     * @type {string}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    period_end: string;
    /**
     * 
     * @type {string}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    period_start: string;
    /**
     * 
     * @type {InvoiceStatus}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    status: InvoiceStatus;
    /**
     * 
     * @type {InvoiceStatusTransitions}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    status_transitions: InvoiceStatusTransitions;
    /**
     * 
     * @type {string}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    subscription?: string;
    /**
     * 
     * @type {number}
     * @memberof AppDomainsPaymentsEntitiesInvoicePreview
     */
    total: number;
}

