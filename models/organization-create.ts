/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.10.20
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface OrganizationCreate
 */
export interface OrganizationCreate {
    /**
     * The unique name of the org in small case without spaces
     * @type {string}
     * @memberof OrganizationCreate
     */
    account_name: string;
    /**
     * The contact email for the Organization
     * @type {string}
     * @memberof OrganizationCreate
     */
    contact_email: string;
    /**
     * A description of the org
     * @type {string}
     * @memberof OrganizationCreate
     */
    description?: string;
    /**
     * The display name for this org
     * @type {string}
     * @memberof OrganizationCreate
     */
    name: string;
    /**
     * URL to the picture associated with this org
     * @type {string}
     * @memberof OrganizationCreate
     */
    picture_url: string;
}


