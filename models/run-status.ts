/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.3
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { RunStatusEnum } from './run-status-enum';
import { StepArrayInput } from './step-array-input';
import { StepArrayOutput } from './step-array-output';
import { StepBooleanInput } from './step-boolean-input';
import { StepBooleanOutput } from './step-boolean-output';
import { StepFileInput } from './step-file-input';
import { StepFileOutput } from './step-file-output';
import { StepFolderInput } from './step-folder-input';
import { StepFolderOutput } from './step-folder-output';
import { StepIntegerInput } from './step-integer-input';
import { StepIntegerOutput } from './step-integer-output';
import { StepJSONObjectInput } from './step-jsonobject-input';
import { StepJSONObjectOutput } from './step-jsonobject-output';
import { StepNumberInput } from './step-number-input';
import { StepNumberOutput } from './step-number-output';
import { StepPathInput } from './step-path-input';
import { StepPathOutput } from './step-path-output';
import { StepStatus } from './step-status';
import { StepStringInput } from './step-string-input';
import { StepStringOutput } from './step-string-output';

/**
 * Job Status.
 * @export
 * @interface RunStatus
 */
export interface RunStatus {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof RunStatus
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RunStatus
     */
    api_version?: string;
    /**
     * The ID of the first step in the run.
     * @type {string}
     * @memberof RunStatus
     */
    entrypoint?: string;
    /**
     * The time at which the task was completed
     * @type {string}
     * @memberof RunStatus
     */
    finished_at?: string;
    /**
     * The ID of the individual run.
     * @type {string}
     * @memberof RunStatus
     */
    id: string;
    /**
     * The inputs used for this run.
     * @type {Array<StepStringInput | StepIntegerInput | StepNumberInput | StepBooleanInput | StepFolderInput | StepFileInput | StepPathInput | StepArrayInput | StepJSONObjectInput>}
     * @memberof RunStatus
     */
    inputs: Array<StepStringInput | StepIntegerInput | StepNumberInput | StepBooleanInput | StepFolderInput | StepFileInput | StepPathInput | StepArrayInput | StepJSONObjectInput>;
    /**
     * The ID of the job that generated this run.
     * @type {string}
     * @memberof RunStatus
     */
    job_id: string;
    /**
     * Any message produced by the task. Usually error/debugging hints.
     * @type {string}
     * @memberof RunStatus
     */
    message?: string;
    /**
     * The outputs produced by this run.
     * @type {Array<StepStringOutput | StepIntegerOutput | StepNumberOutput | StepBooleanOutput | StepFolderOutput | StepFileOutput | StepPathOutput | StepArrayOutput | StepJSONObjectOutput>}
     * @memberof RunStatus
     */
    outputs: Array<StepStringOutput | StepIntegerOutput | StepNumberOutput | StepBooleanOutput | StepFolderOutput | StepFileOutput | StepPathOutput | StepArrayOutput | StepJSONObjectOutput>;
    /**
     * Source url for the status object. It can be a recipe or a function.
     * @type {string}
     * @memberof RunStatus
     */
    source?: string;
    /**
     * The time at which the task was started
     * @type {string}
     * @memberof RunStatus
     */
    started_at: string;
    /**
     * The status of this run.
     * @type {RunStatusEnum}
     * @memberof RunStatus
     */
    status?: RunStatusEnum;
    /**
     * 
     * @type {{ [key: string]: StepStatus; }}
     * @memberof RunStatus
     */
    steps?: { [key: string]: StepStatus; };
    /**
     * 
     * @type {string}
     * @memberof RunStatus
     */
    type?: string;
}


