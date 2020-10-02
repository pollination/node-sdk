/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OperatorVersion } from './operator-version';
import { RecipeVersion } from './recipe-version';

/**
 * A searchable index for a Queenbee Operator and Recipe repository
 * @export
 * @interface RepositoryIndex
 */
export interface RepositoryIndex {
    /**
     * The timestamp at which the index was generated
     * @type {string}
     * @memberof RepositoryIndex
     */
    generated?: string;
    /**
     * A dict of operators accessible by name. Each name key points to a list of operator versions
     * @type {{ [key: string]: Array<OperatorVersion>; }}
     * @memberof RepositoryIndex
     */
    operator?: { [key: string]: Array<OperatorVersion>; };
    /**
     * A dict of recipes accessible by name. Each name key points to a list of recipesversions
     * @type {{ [key: string]: Array<RecipeVersion>; }}
     * @memberof RepositoryIndex
     */
    recipe?: { [key: string]: Array<RecipeVersion>; };
}

