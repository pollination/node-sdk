/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: v0.9.1
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UserMetadata } from './user-metadata';

/**
 * 
 * @export
 * @interface UserPrivate
 */
export interface UserPrivate {
    /**
     * 
     * @type {UserMetadata}
     * @memberof UserPrivate
     */
    metadata?: UserMetadata;
    /**
     * The display name for this user
     * @type {string}
     * @memberof UserPrivate
     */
    name?: string;
    /**
     * URL to the picture associated with this user
     * @type {string}
     * @memberof UserPrivate
     */
    picture?: string;
    /**
     * The lowercase account name for this user
     * @type {string}
     * @memberof UserPrivate
     */
    username?: string;
}


