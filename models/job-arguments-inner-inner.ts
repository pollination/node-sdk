/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { JobArgument } from './job-argument';
// May contain unused imports in some cases
// @ts-ignore
import type { JobPathArgument } from './job-path-argument';
// May contain unused imports in some cases
// @ts-ignore
import type { Source } from './source';

/**
 * 
 * @export
 * @interface JobArgumentsInnerInner
 */
export interface JobArgumentsInnerInner {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof JobArgumentsInnerInner
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Argument name. The name must match one of the input names from Job\'s template which can be a function or DAG.
     * @type {string}
     * @memberof JobArgumentsInnerInner
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof JobArgumentsInnerInner
     */
    'type'?: string;
    /**
     * 
     * @type {any}
     * @memberof JobArgumentsInnerInner
     */
    'value': any;
    /**
     * 
     * @type {Source}
     * @memberof JobArgumentsInnerInner
     */
    'source': Source;
}

