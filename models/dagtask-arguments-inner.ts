/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { From5 } from './from5';
import { TaskArgument } from './task-argument';
import { TaskPathArgument } from './task-path-argument';

/**
 * 
 * @export
 * @interface DAGTaskArgumentsInner
 */
export interface DAGTaskArgumentsInner {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAGTaskArgumentsInner
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {From5}
     * @memberof DAGTaskArgumentsInner
     */
    from: From5;
    /**
     * Argument name. The name must match one of the input names from Task\'s template which can be a function or DAG.
     * @type {string}
     * @memberof DAGTaskArgumentsInner
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof DAGTaskArgumentsInner
     */
    type?: string;
    /**
     * A sub_path inside the path that is provided in the ``from`` field. Use sub_path to only access part of the Path that is needed instead of copying all the files and folders inside the path.
     * @type {string}
     * @memberof DAGTaskArgumentsInner
     */
    sub_path?: string;
}


