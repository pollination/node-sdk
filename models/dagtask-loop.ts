/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { From3 } from './from3';

/**
 * Loop configuration for the task.  This will run the template provided multiple times and in parallel relative to an input or task parameter which should be a list.
 * @export
 * @interface DAGTaskLoop
 */
export interface DAGTaskLoop {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGTaskLoop
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {From3}
     * @memberof DAGTaskLoop
     */
    'from'?: From3;
    /**
     * 
     * @type {string}
     * @memberof DAGTaskLoop
     */
    'type'?: string;
}

