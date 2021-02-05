/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.20
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


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
 * @interface JobStatus
 */
export interface JobStatus {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof JobStatus
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof JobStatus
     */
    api_version?: string;
    /**
     * The ID of the first step in the job.
     * @type {string}
     * @memberof JobStatus
     */
    entrypoint?: string;
    /**
     * The time at which the task was completed
     * @type {string}
     * @memberof JobStatus
     */
    finished_at?: string;
    /**
     * The ID of the individual job.
     * @type {string}
     * @memberof JobStatus
     */
    id: string;
    /**
     * The inputs used for this job.
     * @type {Array<StepStringInput | StepIntegerInput | StepNumberInput | StepBooleanInput | StepFolderInput | StepFileInput | StepPathInput | StepArrayInput | StepJSONObjectInput>}
     * @memberof JobStatus
     */
    inputs: Array<StepStringInput | StepIntegerInput | StepNumberInput | StepBooleanInput | StepFolderInput | StepFileInput | StepPathInput | StepArrayInput | StepJSONObjectInput>;
    /**
     * Any message produced by the task. Usually error/debugging hints.
     * @type {string}
     * @memberof JobStatus
     */
    message?: string;
    /**
     * The outputs produced by this job.
     * @type {Array<StepStringOutput | StepIntegerOutput | StepNumberOutput | StepBooleanOutput | StepFolderOutput | StepFileOutput | StepPathOutput | StepArrayOutput | StepJSONObjectOutput>}
     * @memberof JobStatus
     */
    outputs: Array<StepStringOutput | StepIntegerOutput | StepNumberOutput | StepBooleanOutput | StepFolderOutput | StepFileOutput | StepPathOutput | StepArrayOutput | StepJSONObjectOutput>;
    /**
     * Source url for the status object. It can be a recipe or a function.
     * @type {string}
     * @memberof JobStatus
     */
    source?: string;
    /**
     * The time at which the task was started
     * @type {string}
     * @memberof JobStatus
     */
    started_at: string;
    /**
     * The status of this task. Can be \"Running\", \"Succeeded\", \"Failed\" or \"Error\"
     * @type {string}
     * @memberof JobStatus
     */
    status: string;
    /**
     * 
     * @type {{ [key: string]: StepStatus; }}
     * @memberof JobStatus
     */
    steps?: { [key: string]: StepStatus; };
    /**
     * 
     * @type {string}
     * @memberof JobStatus
     */
    type?: string;
}


