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


import { RecipeSelection } from './recipe-selection';
import { SimulationInputs } from './simulation-inputs';

/**
 * 
 * @export
 * @interface SubmitSimulation
 */
export interface SubmitSimulation {
    /**
     * Simulation inputs
     * @type {SimulationInputs}
     * @memberof SubmitSimulation
     */
    inputs?: SimulationInputs;
    /**
     * The recipe to use
     * @type {RecipeSelection}
     * @memberof SubmitSimulation
     */
    recipe: RecipeSelection;
}


