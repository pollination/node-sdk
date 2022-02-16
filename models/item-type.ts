/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.26.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Type enum for items in a list.  Items can not be files or folder. For a list of files you should copy them to a folder and use FolderInput input instead of using ArrayInput.
 * @export
 * @enum {string}
 */
export enum ItemType {
    Generic = 'Generic',
    String = 'String',
    Integer = 'Integer',
    Number = 'Number',
    Boolean = 'Boolean',
    Array = 'Array',
    JsonObject = 'JSONObject'
}



