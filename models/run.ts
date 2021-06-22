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


import { AccountPublic } from './account-public';
import { RecipeInterface } from './recipe-interface';
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


