/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { Source } from './source';

/**
 * BaseModel with functionality to return the object as a yaml string.
 * @export
 * @interface JobPathArgument
 */
export interface JobPathArgument {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof JobPathArgument
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Argument name. The name must match one of the input names from Job\'s template which can be a function or DAG.
     * @type {string}
     * @memberof JobPathArgument
     */
    'name': string;
    /**
     * 
     * @type {Source}
     * @memberof JobPathArgument
     */
    'source': Source;
    /**
     * 
     * @type {string}
     * @memberof JobPathArgument
     */
    'type'?: string;
}

