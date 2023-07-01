/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.40.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Job argument is an argument input for arguments which are not files or folders.
 * @export
 * @interface JobArgument
 */
export interface JobArgument {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof JobArgument
     */
    annotations?: { [key: string]: string; };
    /**
     * Argument name. The name must match one of the input names from Job\'s DAG template.
     * @type {string}
     * @memberof JobArgument
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof JobArgument
     */
    type?: string;
    /**
     * The value of the job argument.
     * @type {any}
     * @memberof JobArgument
     */
    value: any | null;
}


