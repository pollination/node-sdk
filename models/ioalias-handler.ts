/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
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
    'annotations'?: { [key: string]: string; };
    /**
     * Name of the function. The input value will be passed to this function as the first argument.
     * @type {string}
     * @memberof IOAliasHandler
     */
    'function': string;
    /**
     * An integer to set the index for the order of execution. This input is only useful when there are more than one handler for the same platform and the output of one handler should be passed to another handler. This is also called chained handlers. By default all the handlers are indexed as 0 assuming they are not chained.
     * @type {number}
     * @memberof IOAliasHandler
     */
    'index'?: number;
    /**
     * Declare the language (e.g. python, csharp, etc.). This option allows the recipe to be flexible on handling different programming languages.
     * @type {string}
     * @memberof IOAliasHandler
     */
    'language': string;
    /**
     * Target module or namespace to load the alias function.
     * @type {string}
     * @memberof IOAliasHandler
     */
    'module': string;
    /**
     * 
     * @type {string}
     * @memberof IOAliasHandler
     */
    'type'?: string;
}

