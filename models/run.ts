/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { AccountPublic } from './account-public';
// May contain unused imports in some cases
// @ts-ignore
import type { RecipeInterface } from './recipe-interface';
// May contain unused imports in some cases
// @ts-ignore
import type { RunMeta } from './run-meta';
// May contain unused imports in some cases
// @ts-ignore
import type { RunStatus } from './run-status';

/**
 * 
 * @export
 * @interface Run
 */
export interface Run {
    /**
     * author
     * @type {AccountPublic}
     * @memberof Run
     */
    'author'?: AccountPublic;
    /**
     * The generation of this run
     * @type {number}
     * @memberof Run
     */
    'generation'?: number;
    /**
     * The unique ID for this run
     * @type {string}
     * @memberof Run
     */
    'id': string;
    /**
     * Extra metadata about the run
     * @type {RunMeta}
     * @memberof Run
     */
    'meta'?: RunMeta;
    /**
     * owner
     * @type {AccountPublic}
     * @memberof Run
     */
    'owner'?: AccountPublic;
    /**
     * The recipe used to generate this 
     * @type {RecipeInterface}
     * @memberof Run
     */
    'recipe'?: RecipeInterface;
    /**
     * The status of the run
     * @type {RunStatus}
     * @memberof Run
     */
    'status'?: RunStatus;
}

