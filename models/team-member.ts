/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.13.3
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { TeamRoleEnum } from './team-role-enum';
import { UserPublic } from './user-public';

/**
 * 
 * @export
 * @interface TeamMember
 */
export interface TeamMember {
    /**
     * The role the user has within the team
     * @type {TeamRoleEnum}
     * @memberof TeamMember
     */
    role: TeamRoleEnum;
    /**
     * The team member
     * @type {UserPublic}
     * @memberof TeamMember
     */
    user: UserPublic;
}


