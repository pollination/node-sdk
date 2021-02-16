/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.11.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * BaseModel with functionality to return the object as a yaml string.
 * @export
 * @interface RepositoryMetadata
 */
export interface RepositoryMetadata {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof RepositoryMetadata
     */
    annotations?: { [key: string]: string; };
    /**
     * A short description of the repository
     * @type {string}
     * @memberof RepositoryMetadata
     */
    description?: string;
    /**
     * The name of the repository
     * @type {string}
     * @memberof RepositoryMetadata
     */
    name?: string;
    /**
     * The number of plugins hosted by the repository
     * @type {number}
     * @memberof RepositoryMetadata
     */
    plugin_count?: number;
    /**
     * The number of recipes hosted by the repository
     * @type {number}
     * @memberof RepositoryMetadata
     */
    recipe_count?: number;
    /**
     * The source path (url or local) to the repository
     * @type {string}
     * @memberof RepositoryMetadata
     */
    source?: string;
    /**
     * 
     * @type {string}
     * @memberof RepositoryMetadata
     */
    type?: string;
}


