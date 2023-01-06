/* tslint:disable */
/* eslint-disable */
/**
 * API example
 * Sample API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SampleDTO
 */
export interface SampleDTO {
    /**
     * 
     * @type {number}
     * @memberof SampleDTO
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof SampleDTO
     */
    name: string;
}

/**
 * Check if a given object implements the SampleDTO interface.
 */
export function instanceOfSampleDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function SampleDTOFromJSON(json: any): SampleDTO {
    return SampleDTOFromJSONTyped(json, false);
}

export function SampleDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): SampleDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function SampleDTOToJSON(value?: SampleDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}
