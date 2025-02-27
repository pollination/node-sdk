/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.0
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Dependency kind.
 * @export
 * @enum {string}
 */

export const DependencyKind = {
    Recipe: 'recipe',
    Plugin: 'plugin'
} as const;

export type DependencyKind = typeof DependencyKind[keyof typeof DependencyKind];



