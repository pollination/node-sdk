/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.45.0
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
import { MetaData } from './meta-data';

/**
 * An interface object for creating a Recipe.  Recipe information only includes metadata, source, inputs and outputs of a Recipe. This object is useful for creating user interface for Recipes.
 * @export
 * @interface RecipeInterface
 */
export interface RecipeInterface {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof RecipeInterface
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RecipeInterface
     */
    api_version?: string;
    /**
     * A list of recipe inputs.
     * @type {Array<DAGGenericInput | DAGStringInput | DAGIntegerInput | DAGNumberInput | DAGBooleanInput | DAGFolderInput | DAGFileInput | DAGPathInput | DAGArrayInput | DAGJSONObjectInput>}
     * @memberof RecipeInterface
     */
    inputs?: Array<DAGGenericInput | DAGStringInput | DAGIntegerInput | DAGNumberInput | DAGBooleanInput | DAGFolderInput | DAGFileInput | DAGPathInput | DAGArrayInput | DAGJSONObjectInput>;
    /**
     * Recipe metadata information.
     * @type {MetaData}
     * @memberof RecipeInterface
     */
    metadata: MetaData;
    /**
     * A list of recipe outputs.
     * @type {Array<DAGGenericOutput | DAGStringOutput | DAGIntegerOutput | DAGNumberOutput | DAGBooleanOutput | DAGFolderOutput | DAGFileOutput | DAGPathOutput | DAGArrayOutput | DAGJSONObjectOutput>}
     * @memberof RecipeInterface
     */
    outputs?: Array<DAGGenericOutput | DAGStringOutput | DAGIntegerOutput | DAGNumberOutput | DAGBooleanOutput | DAGFolderOutput | DAGFileOutput | DAGPathOutput | DAGArrayOutput | DAGJSONObjectOutput>;
    /**
     * A URL to the source this recipe from a registry.
     * @type {string}
     * @memberof RecipeInterface
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeInterface
     */
    type?: string;
}


