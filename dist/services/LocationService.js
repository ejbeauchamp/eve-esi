"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
class LocationService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get character location
     * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/location/`
 *
 * Alternate route: `/legacy/characters/{character_id}/location/`
 *
 * Alternate route: `/v1/characters/{character_id}/location/`
 *
 * Alternate route: `/v2/characters/{character_id}/location/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns any Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
     * @throws ApiError
     */
    getCharactersCharacterIdLocation({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/location/',
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
     * Get character online
     * Checks if the character is currently online
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/online/`
 *
 * Alternate route: `/v2/characters/{character_id}/online/`
 *
 * Alternate route: `/v3/characters/{character_id}/online/`
 *
 * ---
 * This route is cached for up to 60 seconds
     * @returns any Object describing the character's online status
     * @throws ApiError
     */
    getCharactersCharacterIdOnline({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/online/',
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
     * Get current ship
     * Get the current ship type, name and id
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/ship/`
 *
 * Alternate route: `/legacy/characters/{character_id}/ship/`
 *
 * Alternate route: `/v1/characters/{character_id}/ship/`
 *
 * Alternate route: `/v2/characters/{character_id}/ship/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns any Get the current ship type, name and id
     * @throws ApiError
     */
    getCharactersCharacterIdShip({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/ship/',
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
}
exports.LocationService = LocationService;
//# sourceMappingURL=LocationService.js.map