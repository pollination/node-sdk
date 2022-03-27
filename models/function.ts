/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.28.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FunctionArrayInput } from './function-array-input';
import { FunctionArrayOutput } from './function-array-output';
import { FunctionBooleanInput } from './function-boolean-input';
import { FunctionBooleanOutput } from './function-boolean-output';
import { FunctionFileInput } from './function-file-input';
import { FunctionFileOutput } from './function-file-output';
import { FunctionFolderInput } from './function-folder-input';
import { FunctionFolderOutput } from './function-folder-output';
import { FunctionIntegerInput } from './function-integer-input';
import { FunctionIntegerOutput } from './function-integer-output';
import { FunctionJSONObjectInput } from './function-jsonobject-input';
import { FunctionJSONObjectOutput } from './function-jsonobject-output';
import { FunctionNumberInput } from './function-number-input';
import { FunctionNumberOutput } from './function-number-output';
import { FunctionPathInput } from './function-path-input';
import { FunctionPathOutput } from './function-path-output';
import { FunctionStringInput } from './function-string-input';
import { FunctionStringOutput } from './function-string-output';

/**
 * A Function with a single command
 * @export
 * @interface Function
 */
export interface Function {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof Function
     */
    annotations?: { [key: string]: string; };
    /**
     * Full shell command for this function. Each function accepts only one command. The command will be executed as a shell command in plugin. For running several commands after each other use && between the commands or pipe data from one to another using |
     * @type {string}
     * @memberof Function
     */
    command: string;
    /**
     * Function description. A short human readable description for this function.
     * @type {string}
     * @memberof Function
     */
    description?: string;
    /**
     * Input arguments for this function.
     * @type {Array<FunctionStringInput | FunctionIntegerInput | FunctionNumberInput | FunctionBooleanInput | FunctionFolderInput | FunctionFileInput | FunctionPathInput | FunctionArrayInput | FunctionJSONObjectInput>}
     * @memberof Function
     */
    inputs?: Array<FunctionStringInput | FunctionIntegerInput | FunctionNumberInput | FunctionBooleanInput | FunctionFolderInput | FunctionFileInput | FunctionPathInput | FunctionArrayInput | FunctionJSONObjectInput>;
    /**
     * Function name. Must be unique within a plugin.
     * @type {string}
     * @memberof Function
     */
    name: string;
    /**
     * List of output arguments.
     * @type {Array<FunctionStringOutput | FunctionIntegerOutput | FunctionNumberOutput | FunctionBooleanOutput | FunctionFolderOutput | FunctionFileOutput | FunctionPathOutput | FunctionArrayOutput | FunctionJSONObjectOutput>}
     * @memberof Function
     */
    outputs?: Array<FunctionStringOutput | FunctionIntegerOutput | FunctionNumberOutput | FunctionBooleanOutput | FunctionFolderOutput | FunctionFileOutput | FunctionPathOutput | FunctionArrayOutput | FunctionJSONObjectOutput>;
    /**
     * 
     * @type {string}
     * @memberof Function
     */
    type?: string;
}


