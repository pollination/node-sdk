/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.10.10
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
     * The contact email for the Organization
     * @type {string}
     * @memberof OrganizationUpdate
     */
    contact_email: string;
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
    name: string;
    /**
     * URL to the picture associated with this org
     * @type {string}
     * @memberof OrganizationUpdate
     */
    picture: string;
}


