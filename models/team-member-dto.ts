/* tslint:disable */
/* eslint-disable */
/**
 * Pollination Server
 * Pollination Server OpenAPI Defintion
 *
 * The version of the OpenAPI document: 0.0.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TeamRoleEnum } from './team-role-enum';

/**
 * 
 * @export
 * @interface TeamMemberDto
 */
export interface TeamMemberDto {
    /**
     * 
     * @type {TeamRoleEnum}
     * @memberof TeamMemberDto
     */
    role: TeamRoleEnum;
    /**
     * The team member
     * @type {string}
     * @memberof TeamMemberDto
     */
    user_id: string;
}


