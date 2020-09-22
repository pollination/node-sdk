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
 * A version of an Operator
 * @export
 * @interface OperatorVersion
 */
export interface OperatorVersion {
    /**
     * The version of the app binary backing the operator (CLI tool or container)
     * @type {string}
     * @memberof OperatorVersion
     */
    app_version?: string;
    /**
     * 
     * @type {string}
     * @memberof OperatorVersion
     */
    created: string;
    /**
     * Whether this operator is deprecated
     * @type {boolean}
     * @memberof OperatorVersion
     */
    deprecated?: boolean;
    /**
     * A description of what this operator does
     * @type {string}
     * @memberof OperatorVersion
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof OperatorVersion
     */
    digest: string;
    /**
     * The URL of this operator home page
     * @type {string}
     * @memberof OperatorVersion
     */
    home?: string;
    /**
     * A URL to an SVG or PNG image to be used as an icon
     * @type {string}
     * @memberof OperatorVersion
     */
    icon?: string;
    /**
     * A list of keywords to search the operator by
     * @type {Array<string>}
     * @memberof OperatorVersion
     */
    keywords?: Array<string>;
    /**
     * A list of maintainers for the operator
     * @type {Array<QueenbeeOperatorMetadataMaintainer>}
     * @memberof OperatorVersion
     */
    maintainers?: Array<QueenbeeOperatorMetadataMaintainer>;
    /**
     * Operator name. This name should be unique among all the operators in your workflow.
     * @type {string}
     * @memberof OperatorVersion
     */
    name: string;
    /**
     * A list of URLs to source code for this operator
     * @type {Array<string>}
     * @memberof OperatorVersion
     */
    sources?: Array<string>;
    /**
     * The tag of the operator
     * @type {string}
     * @memberof OperatorVersion
     */
    tag: string;
    /**
     * 
     * @type {string}
     * @memberof OperatorVersion
     */
    url: string;
}


