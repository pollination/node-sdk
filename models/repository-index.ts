/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.20.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { PackageVersion } from './package-version';
import { RepositoryMetadata } from './repository-metadata';

/**
 * A searchable index for a Queenbee Plugin and Recipe repository
 * @export
 * @interface RepositoryIndex
 */
export interface RepositoryIndex {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof RepositoryIndex
     */
    annotations?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof RepositoryIndex
     */
    api_version?: string;
    /**
     * The timestamp at which the index was generated
     * @type {string}
     * @memberof RepositoryIndex
     */
    generated?: string;
    /**
     * Extra information about the repository
     * @type {RepositoryMetadata}
     * @memberof RepositoryIndex
     */
    metadata?: RepositoryMetadata;
    /**
     * A dict of plugins accessible by name. Each name key points to a list of plugin versions
     * @type {{ [key: string]: Array<PackageVersion>; }}
     * @memberof RepositoryIndex
     */
    plugin?: { [key: string]: Array<PackageVersion>; };
    /**
     * A dict of recipes accessible by name. Each name key points to a list of recipesversions
     * @type {{ [key: string]: Array<PackageVersion>; }}
     * @memberof RepositoryIndex
     */
    recipe?: { [key: string]: Array<PackageVersion>; };
    /**
     * 
     * @type {string}
     * @memberof RepositoryIndex
     */
    type?: string;
}


