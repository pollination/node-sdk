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
 * @interface Invoice
 */
export interface Invoice {
    /**
     * 
     * @type {boolean}
     * @memberof Invoice
     */
    auto_advance?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    collection_method: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    currency: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    customer: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    hosted_invoice_url?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    id: string;
    /**
     * 
     * @type {LineItemList}
     * @memberof Invoice
     */
    lines: LineItemList;
    /**
     * 
     * @type {object}
     * @memberof Invoice
     */
    metadata?: object;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    period_end: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    period_start: string;
    /**
     * 
     * @type {InvoiceStatus}
     * @memberof Invoice
     */
    status: InvoiceStatus;
    /**
     * 
     * @type {InvoiceStatusTransitions}
     * @memberof Invoice
     */
    status_transitions: InvoiceStatusTransitions;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    subscription?: string;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    total: number;
}

