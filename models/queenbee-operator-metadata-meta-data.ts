/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { QueenbeeOperatorMetadataMaintainer } from './queenbee-operator-metadata-maintainer';

/**
 * Operator metadata information
 * @export
 * @interface QueenbeeOperatorMetadataMetaData
 */
export interface QueenbeeOperatorMetadataMetaData {
    /**
     * The version of the app binary backing the operator (CLI tool or container)
     * @type {string}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    app_version?: string;
    /**
     * Whether this operator is deprecated
     * @type {boolean}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    deprecated?: boolean;
    /**
     * A description of what this operator does
     * @type {string}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    description?: string;
    /**
     * The URL of this operator home page
     * @type {string}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    home?: string;
    /**
     * A URL to an SVG or PNG image to be used as an icon
     * @type {string}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    icon?: string;
    /**
     * A list of keywords to search the operator by
     * @type {Array<string>}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    keywords?: Array<string>;
    /**
     * A list of maintainers for the operator
     * @type {Array<QueenbeeOperatorMetadataMaintainer>}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    maintainers?: Array<QueenbeeOperatorMetadataMaintainer>;
    /**
     * Operator name. This name should be unique among all the operators in your workflow.
     * @type {string}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    name: string;
    /**
     * A list of URLs to source code for this operator
     * @type {Array<string>}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    sources?: Array<string>;
    /**
     * The tag of the operator
     * @type {string}
     * @memberof QueenbeeOperatorMetadataMetaData
     */
    tag: string;
}


