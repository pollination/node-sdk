/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { JobArgumentsInnerInner } from './job-arguments-inner-inner';

/**
 * Queenbee Job.  A Job is an object to submit a list of arguments to execute a Queenbee recipe.
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof Job
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    'api_version'?: string;
    /**
     * Input arguments for this job.
     * @type {Array<Array<JobArgumentsInnerInner>>}
     * @memberof Job
     */
    'arguments'?: Array<Array<JobArgumentsInnerInner>>;
    /**
     * Run description.
     * @type {string}
     * @memberof Job
     */
    'description'?: string;
    /**
     * Optional user data as a dictionary. User data is for user reference only and will not be used in the execution of the job.
     * @type {{ [key: string]: string; }}
     * @memberof Job
     */
    'labels'?: { [key: string]: string; };
    /**
     * An optional name for this job. This name will be used a the display name for the run.
     * @type {string}
     * @memberof Job
     */
    'name'?: string;
    /**
     * The source url for downloading the recipe.
     * @type {string}
     * @memberof Job
     */
    'source': string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    'type'?: string;
}

