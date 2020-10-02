/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { InputParameterReference } from './input-parameter-reference';
import { ItemParameterReference } from './item-parameter-reference';
import { TaskParameterReference } from './task-parameter-reference';

/**
 * Input argument for a DAG task.  The name must correspond to an input parameter from the template function the task refers to.
 * @export
 * @interface DAGTaskParameterArgument
 */
export interface DAGTaskParameterArgument {
    /**
     * The previous task or global workflow variable to pull this argument from
     * @type {InputParameterReference | TaskParameterReference | ItemParameterReference}
     * @memberof DAGTaskParameterArgument
     */
    from?: InputParameterReference | TaskParameterReference | ItemParameterReference;
    /**
     * Name of the argument variable
     * @type {string}
     * @memberof DAGTaskParameterArgument
     */
    name: string;
    /**
     * The fixed value for this task argument
     * @type {string}
     * @memberof DAGTaskParameterArgument
     */
    value?: string;
}


