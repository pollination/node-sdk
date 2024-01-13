/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 *      The status of a build.     
 * @export
 * @enum {string}
 */
export enum BuildStatusEnum {
    Pending = 'pending',
    Running = 'running',
    Success = 'success',
    Failure = 'failure',
    Cancelled = 'cancelled',
    AwaitingPackageUpload = 'awaiting_package_upload',
    Unknown = 'unknown'
}



