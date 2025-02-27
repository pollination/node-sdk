/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { BakedRecipe } from './baked-recipe';
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
import type { Function } from './function';
// May contain unused imports in some cases
// @ts-ignore
import type { MetaData } from './meta-data';
// May contain unused imports in some cases
// @ts-ignore
import type { Plugin } from './plugin';
// May contain unused imports in some cases
// @ts-ignore
import type { PluginConfig } from './plugin-config';
// May contain unused imports in some cases
// @ts-ignore
import type { Recipe } from './recipe';

/**
 * 
 * @export
 * @interface ResponseGetPackageJson
 */
export interface ResponseGetPackageJson {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof ResponseGetPackageJson
     */
    'annotations'?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ResponseGetPackageJson
     */
    'api_version'?: string;
    /**
     * A list of plugins and other recipes this recipe depends on.
     * @type {Array<Dependency>}
     * @memberof ResponseGetPackageJson
     */
    'dependencies'?: Array<Dependency>;
    /**
     * A list of tasks to create a DAG recipe.
     * @type {Array<DAG>}
     * @memberof ResponseGetPackageJson
     */
    'flow': Array<DAG>;
    /**
     * Recipe metadata information.
     * @type {MetaData}
     * @memberof ResponseGetPackageJson
     */
    'metadata': MetaData;
    /**
     * 
     * @type {string}
     * @memberof ResponseGetPackageJson
     */
    'type'?: string;
    /**
     * The configuration information to run this plugin
     * @type {PluginConfig}
     * @memberof ResponseGetPackageJson
     */
    'config': PluginConfig;
    /**
     * List of Plugin functions
     * @type {Array<Function>}
     * @memberof ResponseGetPackageJson
     */
    'functions': Array<Function>;
    /**
     * 
     * @type {string}
     * @memberof ResponseGetPackageJson
     */
    'digest': string;
    /**
     * A list of templates. Templates can be Function or a DAG.
     * @type {Array<BakedRecipeTemplatesInner>}
     * @memberof ResponseGetPackageJson
     */
    'templates': Array<BakedRecipeTemplatesInner>;
}

