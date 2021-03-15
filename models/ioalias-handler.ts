/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.3
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Input and output alias handler object.
 * @export
 * @interface IOAliasHandler
 */
export interface IOAliasHandler {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof IOAliasHandler
     */
    annotations?: { [key: string]: string; };
    /**
     * Name of the function. The input value will be passed to this function as the first argument.
     * @type {string}
     * @memberof IOAliasHandler
     */
    _function: string;
    /**
     * Declare the language (e.g. python, csharp, etc.). This option allows the recipe to be flexible on handling different programming languages.
     * @type {string}
     * @memberof IOAliasHandler
     */
    language: string;
    /**
     * Target module or namespace to load the alias function.
     * @type {string}
     * @memberof IOAliasHandler
     */
    module: string;
    /**
     * 
     * @type {string}
     * @memberof IOAliasHandler
     */
    type?: string;
}


