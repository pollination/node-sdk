/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.15.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGArrayInput } from './dagarray-input';
import { DAGArrayOutput } from './dagarray-output';
import { DAGBooleanInput } from './dagboolean-input';
import { DAGBooleanOutput } from './dagboolean-output';
import { DAGFileInput } from './dagfile-input';
import { DAGFileOutput } from './dagfile-output';
import { DAGFolderInput } from './dagfolder-input';
import { DAGFolderOutput } from './dagfolder-output';
import { DAGGenericInput } from './daggeneric-input';
import { DAGGenericOutput } from './daggeneric-output';
import { DAGIntegerInput } from './daginteger-input';
import { DAGIntegerOutput } from './daginteger-output';
import { DAGJSONObjectInput } from './dagjsonobject-input';
import { DAGJSONObjectOutput } from './dagjsonobject-output';
import { DAGNumberInput } from './dagnumber-input';
import { DAGNumberOutput } from './dagnumber-output';
import { DAGPathInput } from './dagpath-input';
import { DAGPathOutput } from './dagpath-output';
import { DAGStringInput } from './dagstring-input';
import { DAGStringOutput } from './dagstring-output';
import { DAGTask } from './dagtask';

/**
 * A Directed Acyclic Graph containing a list of tasks.
 * @export
 * @interface DAG
 */
export interface DAG {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DAG
     */
    annotations?: { [key: string]: string; };
    /**
     * Stop scheduling new steps, as soon as it detects that one of the DAG nodes is failed. Default is True.
     * @type {boolean}
     * @memberof DAG
     */
    fail_fast?: boolean;
    /**
     * Inputs for the DAG.
     * @type {Array<DAGGenericInput | DAGStringInput | DAGIntegerInput | DAGNumberInput | DAGBooleanInput | DAGFolderInput | DAGFileInput | DAGPathInput | DAGArrayInput | DAGJSONObjectInput>}
     * @memberof DAG
     */
    inputs?: Array<DAGGenericInput | DAGStringInput | DAGIntegerInput | DAGNumberInput | DAGBooleanInput | DAGFolderInput | DAGFileInput | DAGPathInput | DAGArrayInput | DAGJSONObjectInput>;
    /**
     * A unique name for this dag.
     * @type {string}
     * @memberof DAG
     */
    name: string;
    /**
     * Outputs of the DAG that can be used by other DAGs.
     * @type {Array<DAGGenericOutput | DAGStringOutput | DAGIntegerOutput | DAGNumberOutput | DAGBooleanOutput | DAGFolderOutput | DAGFileOutput | DAGPathOutput | DAGArrayOutput | DAGJSONObjectOutput>}
     * @memberof DAG
     */
    outputs?: Array<DAGGenericOutput | DAGStringOutput | DAGIntegerOutput | DAGNumberOutput | DAGBooleanOutput | DAGFolderOutput | DAGFileOutput | DAGPathOutput | DAGArrayOutput | DAGJSONObjectOutput>;
    /**
     * Tasks are a list of DAG steps
     * @type {Array<DAGTask>}
     * @memberof DAG
     */
    tasks: Array<DAGTask>;
    /**
     * 
     * @type {string}
     * @memberof DAG
     */
    type?: string;
}


