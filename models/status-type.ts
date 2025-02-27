/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.1
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Type enum for status type.
 * @export
 * @enum {string}
 */

export const StatusType = {
    Function: 'Function',
    Dag: 'DAG',
    Loop: 'Loop',
    Container: 'Container',
    Unknown: 'Unknown'
} as const;

export type StatusType = typeof StatusType[keyof typeof StatusType];



