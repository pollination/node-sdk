/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.18.0
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
 * A folder input.
 * @export
 * @interface StepFolderInput
 */
export interface StepFolderInput {
    /**
     * A list of aliases for this input in different platforms.
     * @type {Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>}
     * @memberof StepFolderInput
     */
    alias?: Array<DAGGenericInputAlias | DAGStringInputAlias | DAGIntegerInputAlias | DAGNumberInputAlias | DAGBooleanInputAlias | DAGFolderInputAlias | DAGFileInputAlias | DAGPathInputAlias | DAGArrayInputAlias | DAGJSONObjectInputAlias | DAGLinkedInputAlias>;
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof StepFolderInput
     */
    annotations?: { [key: string]: string; };
    /**
     * The default source for file if the value is not provided.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof StepFolderInput
     */
    _default?: HTTP | S3 | ProjectFolder;
    /**
     * Optional description for input.
     * @type {string}
     * @memberof StepFolderInput
     */
    description?: string;
    /**
     * Input name.
     * @type {string}
     * @memberof StepFolderInput
     */
    name: string;
    /**
     * Path to the target location that the input will be copied to.  This path is relative to the working directory where the command is executed.
     * @type {string}
     * @memberof StepFolderInput
     */
    path?: string;
    /**
     * A field to indicate if this input is required. This input needs to be set explicitly even when a default value is provided.
     * @type {boolean}
     * @memberof StepFolderInput
     */
    required?: boolean;
    /**
     * The path to source the file from.
     * @type {HTTP | S3 | ProjectFolder}
     * @memberof StepFolderInput
     */
    source: HTTP | S3 | ProjectFolder;
    /**
     * An optional JSON Schema specification to validate the input value. You can use validate_spec method to validate a value against the spec.
     * @type {object}
     * @memberof StepFolderInput
     */
    spec?: object;
    /**
     * 
     * @type {string}
     * @memberof StepFolderInput
     */
    type?: string;
}


