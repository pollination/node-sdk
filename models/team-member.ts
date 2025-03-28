/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 1.7.2
 * Contact: info@pollination.solutions
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import type { TeamRoleEnum } from './team-role-enum';
// May contain unused imports in some cases
// @ts-ignore
import type { UserPublic } from './user-public';

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
    'role': TeamRoleEnum;
    /**
     * The team member
     * @type {UserPublic}
     * @memberof TeamMember
     */
    'user': UserPublic;
}



