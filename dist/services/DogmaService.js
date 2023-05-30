"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DogmaService = void 0;
class DogmaService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get attributes
     * Get a list of dogma attribute ids
 *
 * ---
 * Alternate route: `/dev/dogma/attributes/`
 *
 * Alternate route: `/legacy/dogma/attributes/`
 *
 * Alternate route: `/v1/dogma/attributes/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of dogma attribute ids
     * @throws ApiError
     */
    getDogmaAttributes({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dogma/attributes/',
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get attribute information
     * Get information on a dogma attribute
 *
 * ---
 * Alternate route: `/dev/dogma/attributes/{attribute_id}/`
 *
 * Alternate route: `/legacy/dogma/attributes/{attribute_id}/`
 *
 * Alternate route: `/v1/dogma/attributes/{attribute_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a dogma attribute
     * @throws ApiError
     */
    getDogmaAttributesAttributeId({ attributeId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dogma/attributes/{attribute_id}/',
            path: {
                'attribute_id': attributeId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Dogma attribute not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get dynamic item information
     * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
 *
 * ---
 * Alternate route: `/dev/dogma/dynamic/items/{type_id}/{item_id}/`
 *
 * Alternate route: `/legacy/dogma/dynamic/items/{type_id}/{item_id}/`
 *
 * Alternate route: `/v1/dogma/dynamic/items/{type_id}/{item_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Details about a dynamic item
     * @throws ApiError
     */
    getDogmaDynamicItemsTypeIdItemId({ itemId, typeId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dogma/dynamic/items/{type_id}/{item_id}/',
            path: {
                'item_id': itemId,
                'type_id': typeId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Item not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get effects
     * Get a list of dogma effect ids
 *
 * ---
 * Alternate route: `/dev/dogma/effects/`
 *
 * Alternate route: `/legacy/dogma/effects/`
 *
 * Alternate route: `/v1/dogma/effects/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of dogma effect ids
     * @throws ApiError
     */
    getDogmaEffects({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dogma/effects/',
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get effect information
     * Get information on a dogma effect
 *
 * ---
 * Alternate route: `/dev/dogma/effects/{effect_id}/`
 *
 * Alternate route: `/v2/dogma/effects/{effect_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a dogma effect
     * @throws ApiError
     */
    getDogmaEffectsEffectId({ effectId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/dogma/effects/{effect_id}/',
            path: {
                'effect_id': effectId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Dogma effect not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.DogmaService = DogmaService;
//# sourceMappingURL=DogmaService.js.map