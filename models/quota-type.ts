/* tslint:disable */
/* eslint-disable */
/**
 * pollination-server
 * Pollination Server OpenAPI Definition
 *
 * The version of the OpenAPI document: 0.38.0
 * Contact: info@pollination.cloud
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * The type of comsumption-limited resource to which the quota refers.
 * @export
 * @enum {string}
 */
export enum QuotaType {
    Storage = 'storage',
    ComputeHours = 'compute_hours',
    ParallelWorkflowContainers = 'parallel_workflow_containers',
    PrivateRepositories = 'private_repositories',
    PrivateProjects = 'private_projects',
    Teams = 'teams',
    Members = 'members',
    CpuLimit = 'cpu_limit',
    MemoryLimit = 'memory_limit',
    RhinoPluginLicense = 'rhino_plugin_license',
    RevitPluginLicense = 'revit_plugin_license',
    ApplicationCpu = 'application_cpu',
    ApplicationMemory = 'application_memory'
}



