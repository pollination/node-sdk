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
import type { FunctionInputsInner } from './function-inputs-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { FunctionOutputsInner } from './function-outputs-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { PluginConfig } from './plugin-config';
// May contain unused imports in some cases
// @ts-ignore
import type { ScriptingLanguages } from './scripting-languages';

/**
 * Function template.
 * @export
 * @interface TemplateFunction
 */
export interface TemplateFunction {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof TemplateFunction
     */
    'annotations'?: { [key: string]: string; };
    /**
     * Full shell command for this function. Each function accepts only one command. The command will be executed as a shell command in plugin. For running several commands after each other use && between the commands or pipe data from one to another using |
     * @type {string}
     * @memberof TemplateFunction
     */
    'command'?: string;
    /**
     * The plugin config to use for this function
     * @type {PluginConfig}
     * @memberof TemplateFunction
     */
    'config': PluginConfig;
    /**
     * Function description. A short human readable description for this function.
     * @type {string}
     * @memberof TemplateFunction
     */
    'description'?: string;
    /**
     * Input arguments for this function.
     * @type {Array<FunctionInputsInner>}
     * @memberof TemplateFunction
     */
    'inputs'?: Array<FunctionInputsInner>;
    /**
     * Programming language of the script. Currently only Python is supported.
     * @type {ScriptingLanguages}
     * @memberof TemplateFunction
     */
    'language'?: ScriptingLanguages;
    /**
     * Function name. Must be unique within a plugin.
     * @type {string}
     * @memberof TemplateFunction
     */
    'name': string;
    /**
     * List of output arguments.
     * @type {Array<FunctionOutputsInner>}
     * @memberof TemplateFunction
     */
    'outputs'?: Array<FunctionOutputsInner>;
    /**
     * Source contains the source code of the script to execute.
     * @type {string}
     * @memberof TemplateFunction
     */
    'source'?: string;
    /**
     * 
     * @type {string}
     * @memberof TemplateFunction
     */
    'type'?: string;
}



