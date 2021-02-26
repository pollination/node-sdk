/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.12.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    description?: string;
    /**
     * The team ID
     * @type {string}
     * @memberof Team
     */
    id: string;
    /**
     * The number of members that are part of this team
     * @type {number}
     * @memberof Team
     */
    member_count?: number;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    name: string;
    /**
     * The slug of the team
     * @type {string}
     * @memberof Team
     */
    slug: string;
}


