/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * S3 Source  An S3 bucket artifact Source.
 * @export
 * @interface S3
 */
export interface S3 {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof S3
     */
    annotations?: { [key: string]: string; };
    /**
     * The name of the S3 bucket on the host server.
     * @type {string}
     * @memberof S3
     */
    bucket: string;
    /**
     * Path to the file holding the AccessKey and SecretAccessKey to authenticate to the bucket. Assumes public bucket access if none are specified.
     * @type {string}
     * @memberof S3
     */
    credentials_path?: string;
    /**
     * The HTTP endpoint to reach the S3 bucket.
     * @type {string}
     * @memberof S3
     */
    endpoint: string;
    /**
     * The path inside the bucket to source artifacts from.
     * @type {string}
     * @memberof S3
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof S3
     */
    type?: string;
}


