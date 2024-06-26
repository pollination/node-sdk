/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { DAG } from './dag';
import { Dependency } from './dependency';
import { MetaData } from './meta-data';
import { TemplateFunction } from './template-function';

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
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof BakedRecipe
     */
    api_version?: string;
    /**
     * A list of plugins and other recipes this recipe depends on.
     * @type {Array<Dependency>}
     * @memberof BakedRecipe
     */
    dependencies?: Array<Dependency>;
    /**
     * 
     * @type {string}
     * @memberof BakedRecipe
     */
    digest: string;
    /**
     * A list of tasks to create a DAG recipe.
     * @type {Array<DAG>}
     * @memberof BakedRecipe
     */
    flow: Array<DAG>;
    /**
     * Recipe metadata information.
     * @type {MetaData}
     * @memberof BakedRecipe
     */
    metadata?: MetaData;
    /**
     * A list of templates. Templates can be Function or a DAG.
     * @type {Array<TemplateFunction | DAG>}
     * @memberof BakedRecipe
     */
    templates: Array<TemplateFunction | DAG>;
    /**
     * 
     * @type {string}
     * @memberof BakedRecipe
     */
    type?: string;
}


