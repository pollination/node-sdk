/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.4.2
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { DAGInputsInner } from './daginputs-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { DAGOutputsInner } from './dagoutputs-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { MetaData } from './meta-data';

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
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RecipeInterface
     */
    'api_version'?: string;
    /**
     * A list of recipe inputs.
     * @type {Array<DAGInputsInner>}
     * @memberof RecipeInterface
     */
    'inputs'?: Array<DAGInputsInner>;
    /**
     * Recipe metadata information.
     * @type {MetaData}
     * @memberof RecipeInterface
     */
    'metadata': MetaData;
    /**
     * A list of recipe outputs.
     * @type {Array<DAGOutputsInner>}
     * @memberof RecipeInterface
     */
    'outputs'?: Array<DAGOutputsInner>;
    /**
     * A URL to the source this recipe from a registry.
     * @type {string}
     * @memberof RecipeInterface
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeInterface
     */
    'type'?: string;
}

