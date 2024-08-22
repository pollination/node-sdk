/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.6.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { BakedRecipeTemplatesInner } from './baked-recipe-templates-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { DAG } from './dag';
// May contain unused imports in some cases
// @ts-ignore
import type { Dependency } from './dependency';
// May contain unused imports in some cases
// @ts-ignore
import type { MetaData } from './meta-data';

/**
 * Baked Recipe.  A Baked Recipe contains all the templates referred to in the DAG within a templates list.
 * @export
 * @interface BakedRecipe
 */
export interface BakedRecipe {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof BakedRecipe
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof BakedRecipe
     */
    'api_version'?: string;
    /**
     * A list of plugins and other recipes this recipe depends on.
     * @type {Array<Dependency>}
     * @memberof BakedRecipe
     */
    'dependencies'?: Array<Dependency>;
    /**
     * 
     * @type {string}
     * @memberof BakedRecipe
     */
    'digest': string;
    /**
     * A list of tasks to create a DAG recipe.
     * @type {Array<DAG>}
     * @memberof BakedRecipe
     */
    'flow': Array<DAG>;
    /**
     * Recipe metadata information.
     * @type {MetaData}
     * @memberof BakedRecipe
     */
    'metadata'?: MetaData;
    /**
     * A list of templates. Templates can be Function or a DAG.
     * @type {Array<BakedRecipeTemplatesInner>}
     * @memberof BakedRecipe
     */
    'templates': Array<BakedRecipeTemplatesInner>;
    /**
     * 
     * @type {string}
     * @memberof BakedRecipe
     */
    'type'?: string;
}

