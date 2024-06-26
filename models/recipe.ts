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

/**
 * A Queenbee Recipe
 * @export
 * @interface Recipe
 */
export interface Recipe {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof Recipe
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    api_version?: string;
    /**
     * A list of plugins and other recipes this recipe depends on.
     * @type {Array<Dependency>}
     * @memberof Recipe
     */
    dependencies?: Array<Dependency>;
    /**
     * A list of tasks to create a DAG recipe.
     * @type {Array<DAG>}
     * @memberof Recipe
     */
    flow: Array<DAG>;
    /**
     * Recipe metadata information.
     * @type {MetaData}
     * @memberof Recipe
     */
    metadata?: MetaData;
    /**
     * 
     * @type {string}
     * @memberof Recipe
     */
    type?: string;
}


