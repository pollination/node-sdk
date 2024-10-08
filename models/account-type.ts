/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The type of account.
 * @export
 * @enum {string}
 */

export const AccountType = {
    Org: 'org',
    User: 'user'
} as const;

export type AccountType = typeof AccountType[keyof typeof AccountType];



