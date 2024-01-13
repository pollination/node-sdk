/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.1.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { StatusType } from './status-type';
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
import { StepStatusEnum } from './step-status-enum';
import { StepStringInput } from './step-string-input';
import { StepStringOutput } from './step-string-output';

/**
 * The Status of a Job Step
 * @export
 * @interface StepStatus
 */
export interface StepStatus {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepStatus
     */
    annotations?: { [key: string]: string; };
    /**
     * This indicates the step ID of the associated template root             step in which this step belongs to. A DAG step will have the id of the             parent DAG for example.
     * @type {string}
     * @memberof StepStatus
     */
    boundary_id?: string;
    /**
     * A list of child step IDs
     * @type {Array<string>}
     * @memberof StepStatus
     */
    children_ids: Array<string>;
    /**
     * The command used to run this step. Only applies to Function steps.
     * @type {string}
     * @memberof StepStatus
     */
    command?: string;
    /**
     * The time at which the task was completed
     * @type {string}
     * @memberof StepStatus
     */
    finished_at?: string;
    /**
     * The step unique ID
     * @type {string}
     * @memberof StepStatus
     */
    id: string;
    /**
     * The inputs used by this step.
     * @type {Array<StepStringInput | StepIntegerInput | StepNumberInput | StepBooleanInput | StepFolderInput | StepFileInput | StepPathInput | StepArrayInput | StepJSONObjectInput>}
     * @memberof StepStatus
     */
    inputs: Array<StepStringInput | StepIntegerInput | StepNumberInput | StepBooleanInput | StepFolderInput | StepFileInput | StepPathInput | StepArrayInput | StepJSONObjectInput>;
    /**
     * Any message produced by the task. Usually error/debugging hints.
     * @type {string}
     * @memberof StepStatus
     */
    message?: string;
    /**
     * A human readable name for the step. Usually defined by the DAG task name but can be extended if the step is part of a loop for example. This name is unique within the boundary of the DAG/Job that generated it.
     * @type {string}
     * @memberof StepStatus
     */
    name: string;
    /**
     * A list of the last step to ran in the context of this step. In the case of a DAG or a job this will be the last step that has been executed. It will remain empty for functions.
     * @type {Array<string>}
     * @memberof StepStatus
     */
    outbound_steps: Array<string>;
    /**
     * The outputs produced by this step.
     * @type {Array<StepStringOutput | StepIntegerOutput | StepNumberOutput | StepBooleanOutput | StepFolderOutput | StepFileOutput | StepPathOutput | StepArrayOutput | StepJSONObjectOutput>}
     * @memberof StepStatus
     */
    outputs: Array<StepStringOutput | StepIntegerOutput | StepNumberOutput | StepBooleanOutput | StepFolderOutput | StepFileOutput | StepPathOutput | StepArrayOutput | StepJSONObjectOutput>;
    /**
     * Source url for the status object. It can be a recipe or a function.
     * @type {string}
     * @memberof StepStatus
     */
    source?: string;
    /**
     * The time at which the task was started
     * @type {string}
     * @memberof StepStatus
     */
    started_at: string;
    /**
     * The status of this step.
     * @type {StepStatusEnum}
     * @memberof StepStatus
     */
    status?: StepStatusEnum;
    /**
     * The type of step this status is for. Can be \"Function\", \"DAG\" or \"Loop\"
     * @type {StatusType}
     * @memberof StepStatus
     */
    status_type: StatusType;
    /**
     * The name of the template that spawned this step
     * @type {string}
     * @memberof StepStatus
     */
    template_ref: string;
    /**
     * 
     * @type {string}
     * @memberof StepStatus
     */
    type?: string;
}


