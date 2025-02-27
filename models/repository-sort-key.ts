/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.1
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * An enumeration.
 * @export
 * @enum {string}
 */

export const RepositorySortKey = {
    CreatedAt: 'created_at',
    UpdatedAt: 'updated_at',
    Name: 'name',
    LatestTag: 'latest_tag'
} as const;

export type RepositorySortKey = typeof RepositorySortKey[keyof typeof RepositorySortKey];



