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
 * Plugin Configuration to run in a Docker container
 * @export
 * @interface DockerConfig
 */
export interface DockerConfig {
    /**
     * An optional dictionary to add annotations to inputs. These annotations will be used by the client side libraries.
     * @type {{ [key: string]: string; }}
     * @memberof DockerConfig
     */
    annotations?: { [key: string]: string; };
    /**
     * Docker image name. Must include tag.
     * @type {string}
     * @memberof DockerConfig
     */
    image: string;
    /**
     * The container registry URLs that this container should be pulled from. Will default to Dockerhub if none is specified.
     * @type {string}
     * @memberof DockerConfig
     */
    registry?: string;
    /**
     * 
     * @type {string}
     * @memberof DockerConfig
     */
    type?: string;
    /**
     * The working directory the entrypoint command of the container runsin. This is used to determine where to load artifacts when running in the container.
     * @type {string}
     * @memberof DockerConfig
     */
    workdir: string;
}


