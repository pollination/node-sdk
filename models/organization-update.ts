/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.0
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
     * The pretty name of the org
     * @type {string}
     * @memberof OrganizationUpdate
     */
    name: string;
    /**
     * The avatar picture for the Org
     * @type {string}
     * @memberof OrganizationUpdate
     */
    picture: string;
}

