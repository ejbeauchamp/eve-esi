"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetsService = void 0;
class AssetsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get character assets
     * Return a list of the characters assets
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/assets/`
 *
 * Alternate route: `/v5/characters/{character_id}/assets/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A flat list of the users assets
     * @throws ApiError
     */
    getCharactersCharacterIdAssets({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/assets/',
            path: {
                'character_id': characterId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'page': page,
                'token': token,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Requested page does not exist`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get character asset locations
     * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/assets/locations/`
 *
 * Alternate route: `/v2/characters/{character_id}/assets/locations/`
 *
     * @returns any List of asset locations
     * @throws ApiError
     */
    postCharactersCharacterIdAssetsLocations({ characterId, itemIds, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/characters/{character_id}/assets/locations/',
            path: {
                'character_id': characterId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: itemIds,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get character asset names
     * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/assets/names/`
 *
 * Alternate route: `/legacy/characters/{character_id}/assets/names/`
 *
 * Alternate route: `/v1/characters/{character_id}/assets/names/`
 *
     * @returns any List of asset names
     * @throws ApiError
     */
    postCharactersCharacterIdAssetsNames({ characterId, itemIds, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/characters/{character_id}/assets/names/',
            path: {
                'character_id': characterId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: itemIds,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get corporation assets
     * Return a list of the corporation assets
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/assets/`
 *
 * Alternate route: `/v5/corporations/{corporation_id}/assets/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any A list of assets
     * @throws ApiError
     */
    getCorporationsCorporationIdAssets({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/assets/',
            path: {
                'corporation_id': corporationId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'page': page,
                'token': token,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get corporation asset locations
     * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/assets/locations/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/assets/locations/`
 *
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of asset locations
     * @throws ApiError
     */
    postCorporationsCorporationIdAssetsLocations({ corporationId, itemIds, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/corporations/{corporation_id}/assets/locations/',
            path: {
                'corporation_id': corporationId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: itemIds,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Invalid IDs`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get corporation asset names
     * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/assets/names/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/assets/names/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/assets/names/`
 *
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of asset names
     * @throws ApiError
     */
    postCorporationsCorporationIdAssetsNames({ corporationId, itemIds, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/corporations/{corporation_id}/assets/names/',
            path: {
                'corporation_id': corporationId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: itemIds,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Invalid IDs`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.AssetsService = AssetsService;
//# sourceMappingURL=AssetsService.js.map