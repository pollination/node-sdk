/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.42.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OrganizationUpdate
 */
export interface OrganizationUpdate {
    /**
     * The unique name of the org in small case without spaces
     * @type {string}
     * @memberof OrganizationUpdate
     */
    account_name?: string;
    /**
     * The contact email for the Organization
     * @type {string}
     * @memberof OrganizationUpdate
     */
    contact_email?: string;
    /**
     * A description of the org
     * @type {string}
     * @memberof OrganizationUpdate
     */
    description?: string;
    /**
     * The display name for this org
     * @type {string}
     * @memberof OrganizationUpdate
     */
    name?: string;
    /**
     * URL to the picture associated with this org
     * @type {string}
     * @memberof OrganizationUpdate
     */
    picture_url?: string;
}


