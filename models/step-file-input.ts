/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.30.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAGArrayInputAlias } from './dagarray-input-alias';
import { DAGBooleanInputAlias } from './dagboolean-input-alias';
import { DAGFileInputAlias } from './dagfile-input-alias';
import { DAGFolderInputAlias } from './dagfolder-input-alias';
import { DAGGenericInputAlias } from './daggeneric-input-alias';
import { DAGIntegerInputAlias } from './daginteger-input-alias';
import { DAGJSONObjectInputAlias } from './dagjsonobject-input-alias';
import { DAGLinkedInputAlias } from './daglinked-input-alias';
import { DAGNumberInputAlias } from './dagnumber-input-alias';
import { DAGPathInputAlias } from './dagpath-input-alias';
import { DAGStringInputAlias } from './dagstring-input-alias';
import { HTTP } from './http';
import { ProjectFolder } from './project-folder';
import { S3 } from './s3';

/**
 * A file input.
 * @export
 * @interface StepFileInput
 */
export interface StepFileInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>}
     * @memberof StepFileInput
     */
    alias?: Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepFileInput
     */
    annotations?: { [key: string]: string; };
    /**
     * The default source for file if the value is not provided.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof StepFileInput
     */
    _default?: HTTP | S3 | ProjectFolder;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof StepFileInput
     */
    description?: string;
    /**
     * Optional list of extensions for file. The check for extension is case-insensitive.
     * @type {Array<string>}
     * @memberof StepFileInput
     */
    extensions?: Array<string>;
    /**
     * Input name.
     * @type {string}
     * @memberof StepFileInput
     */
    name: string;
    /**
     * Path to the target location that the input will be copied to.  This path is relative to the working directory where the command is executed.
     * @type {string}
     * @memberof StepFileInput
     */
    path?: string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof StepFileInput
     */
    required?: boolean;
    /**
     * The path to source the file from.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof StepFileInput
     */
    source: HTTP | S3 | ProjectFolder;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof StepFileInput
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof StepFileInput
     */
    type?: string;
}


