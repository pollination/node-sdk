/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Enumaration of allowable status strings
 * @export
 * @enum {string}
 */

export const RunStatusEnum = {
    Created: 'Created',
    Scheduled: 'Scheduled',
    Running: 'Running',
    PostProcessing: 'Post-Processing',
    Failed: 'Failed',
    Cancelled: 'Cancelled',
    Succeeded: 'Succeeded',
    Unknown: 'Unknown'
} as const;

export type RunStatusEnum = typeof RunStatusEnum[keyof typeof RunStatusEnum];



