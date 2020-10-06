/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface RepositoryPackageAbriged
 */
export interface RepositoryPackageAbriged {
    /**
     * Creation Timestamp
     * @type {string}
     * @memberof RepositoryPackageAbriged
     */
    created_at?: string;
    /**
     * description
     * @type {string}
     * @memberof RepositoryPackageAbriged
     */
    description?: string;
    /**
     * The new package digest
     * @type {string}
     * @memberof RepositoryPackageAbriged
     */
    digest: string;
    /**
     * icon
     * @type {string}
     * @memberof RepositoryPackageAbriged
     */
    icon?: string;
    /**
     * keywords
     * @type {Array<string>}
     * @memberof RepositoryPackageAbriged
     */
    keywords?: Array<string>;
    /**
     * The new package tag
     * @type {string}
     * @memberof RepositoryPackageAbriged
     */
    tag: string;
}


