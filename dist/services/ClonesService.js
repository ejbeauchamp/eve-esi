"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClonesService = void 0;
class ClonesService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get clones
     * A list of the character's clones
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/clones/`
 *
 * Alternate route: `/v3/characters/{character_id}/clones/`
 *
 * Alternate route: `/v4/characters/{character_id}/clones/`
 *
 * ---
 * This route is cached for up to 120 seconds
     * @returns any Clone information for the given character
     * @throws ApiError
     */
    getCharactersCharacterIdClones({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/clones/',
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
     * Get active implants
     * Return implants on the active clone of a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/implants/`
 *
 * Alternate route: `/legacy/characters/{character_id}/implants/`
 *
 * Alternate route: `/v1/characters/{character_id}/implants/`
 *
 * Alternate route: `/v2/characters/{character_id}/implants/`
 *
 * ---
 * This route is cached for up to 120 seconds
     * @returns number A list of implant type ids
     * @throws ApiError
     */
    getCharactersCharacterIdImplants({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/implants/',
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
exports.ClonesService = ClonesService;
//# sourceMappingURL=ClonesService.js.map