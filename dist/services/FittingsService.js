"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FittingsService = void 0;
class FittingsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get fittings
     * Return fittings of a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/fittings/`
 *
 * Alternate route: `/v2/characters/{character_id}/fittings/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of fittings
     * @throws ApiError
     */
    getCharactersCharacterIdFittings({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/fittings/',
            path: {
                'character_id': characterId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
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
     * Create fitting
     * Save a new fitting for a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/fittings/`
 *
 * Alternate route: `/v2/characters/{character_id}/fittings/`
 *
     * @returns any A list of fittings
     * @throws ApiError
     */
    postCharactersCharacterIdFittings({ characterId, fitting, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/characters/{character_id}/fittings/',
            path: {
                'character_id': characterId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: fitting,
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
     * Delete fitting
     * Delete a fitting from a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/`
 *
 * Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/`
 *
 * Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    deleteCharactersCharacterIdFittingsFittingId({ characterId, fittingId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/characters/{character_id}/fittings/{fitting_id}/',
            path: {
                'character_id': characterId,
                'fitting_id': fittingId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
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
}
exports.FittingsService = FittingsService;
//# sourceMappingURL=FittingsService.js.map