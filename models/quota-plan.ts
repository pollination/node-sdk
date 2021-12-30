/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.22.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * A quota plan
 * @export
 * @interface QuotaPlan
 */
export interface QuotaPlan {
    /**
     * Whether the limit is triggers a blocking response from the server
     * @type {boolean}
     * @memberof QuotaPlan
     */
    enforced?: boolean;
    /**
     * The maximum amount of a resource that a subscription allows
     * @type {number}
     * @memberof QuotaPlan
     */
    limit?: number;
    /**
     * The name of the quota
     * @type {string}
     * @memberof QuotaPlan
     */
    name: string;
    /**
     * Whether consumption is reset to 0 every month
     * @type {boolean}
     * @memberof QuotaPlan
     */
    resets?: boolean;
}


