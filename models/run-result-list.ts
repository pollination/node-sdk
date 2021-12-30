/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.22.0
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
import { StepStringInput } from './step-string-input';
import { StepStringOutput } from './step-string-output';

/**
 * A list response from a pagination request
 * @export
 * @interface RunResultList
 */
export interface RunResultList {
    /**
     * The next page, if this on is not the last
     * @type {number}
     * @memberof RunResultList
     */
    next_page?: number;
    /**
     * The current page the pagination request is on
     * @type {number}
     * @memberof RunResultList
     */
    page: number;
    /**
     * The total number of pages
     * @type {number}
     * @memberof RunResultList
     */
    page_count: number;
    /**
     * The number of pages per pagination request
     * @type {number}
     * @memberof RunResultList
     */
    per_page: number;
    /**
     * 
     * @type {Array<Array<StepStringInput | StepIntegerInput | StepNumberInput | StepBooleanInput | StepFolderInput | StepFileInput | StepPathInput | StepArrayInput | StepJSONObjectInput | StepStringOutput | StepIntegerOutput | StepNumberOutput | StepBooleanOutput | StepFolderOutput | StepFileOutput | StepPathOutput | StepArrayOutput | StepJSONObjectOutput>>}
     * @memberof RunResultList
     */
    resources: Array<Array<StepStringInput | StepIntegerInput | StepNumberInput | StepBooleanInput | StepFolderInput | StepFileInput | StepPathInput | StepArrayInput | StepJSONObjectInput | StepStringOutput | StepIntegerOutput | StepNumberOutput | StepBooleanOutput | StepFolderOutput | StepFileOutput | StepPathOutput | StepArrayOutput | StepJSONObjectOutput>>;
    /**
     * The total number of resources matching the list request
     * @type {number}
     * @memberof RunResultList
     */
    total_count: number;
}


