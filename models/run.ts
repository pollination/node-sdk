/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.25.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AccountPublic } from './account-public';
import { RecipeInterface } from './recipe-interface';
import { RunMeta } from './run-meta';
import { RunStatus } from './run-status';

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
    author?: AccountPublic;
    /**
     * The generation of this run
     * @type {number}
     * @memberof Run
     */
    generation?: number;
    /**
     * The unique ID for this run
     * @type {string}
     * @memberof Run
     */
    id: string;
    /**
     * Extra metadata about the run
     * @type {RunMeta}
     * @memberof Run
     */
    meta?: RunMeta;
    /**
     * owner
     * @type {AccountPublic}
     * @memberof Run
     */
    owner?: AccountPublic;
    /**
     * The recipe used to generate this 
     * @type {RecipeInterface}
     * @memberof Run
     */
    recipe?: RecipeInterface;
    /**
     * The status of the run
     * @type {RunStatus}
     * @memberof Run
     */
    status?: RunStatus;
}


