/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.31.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Project Folder Source  This is the path to a folder where files and folders can be sourced. In the context of a desktop run Workflow this folder will correspond to a local folder. In the context of a workflow run on Pollination this folder will correspond to a Project scoped folder.
 * @export
 * @interface ProjectFolder
 */
export interface ProjectFolder {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof ProjectFolder
     */
    annotations?: { [key: string]: string; };
    /**
     * The path to a folder where files and folders can be sourced. For a local filesystem this can be \"C:\\Users\\me\\jobs\\test\".
     * @type {string}
     * @memberof ProjectFolder
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectFolder
     */
    type?: string;
}


