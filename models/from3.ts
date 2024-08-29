/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { InputReference } from './input-reference';
// May contain unused imports in some cases
// @ts-ignore
import type { TaskReference } from './task-reference';
// May contain unused imports in some cases
// @ts-ignore
import type { ValueListReference } from './value-list-reference';

/**
 * The task or DAG parameter to loop over (must be iterable).
 * @export
 * @interface From3
 */
export interface From3 {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof From3
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof From3
     */
    'type'?: string;
    /**
     * The name of the variable.
     * @type {string}
     * @memberof From3
     */
    'variable': string;
    /**
     * The name of the task to pull output data from.
     * @type {string}
     * @memberof From3
     */
    'name': string;
    /**
     * A fixed value for this reference.
     * @type {Array<any>}
     * @memberof From3
     */
    'value': Array<any>;
}

