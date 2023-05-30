"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillsService = void 0;
class SkillsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get character attributes
     * Return attributes of a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/attributes/`
 *
 * Alternate route: `/legacy/characters/{character_id}/attributes/`
 *
 * Alternate route: `/v1/characters/{character_id}/attributes/`
 *
 * ---
 * This route is cached for up to 120 seconds
     * @returns any Attributes of a character
     * @throws ApiError
     */
    getCharactersCharacterIdAttributes({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/attributes/',
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
     * Get character's skill queue
     * List the configured skill queue for the given character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/skillqueue/`
 *
 * Alternate route: `/legacy/characters/{character_id}/skillqueue/`
 *
 * Alternate route: `/v2/characters/{character_id}/skillqueue/`
 *
 * ---
 * This route is cached for up to 120 seconds
     * @returns any The current skill queue, sorted ascending by finishing time
     * @throws ApiError
     */
    getCharactersCharacterIdSkillqueue({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/skillqueue/',
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
     * Get character skills
     * List all trained skills for the given character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/skills/`
 *
 * Alternate route: `/v4/characters/{character_id}/skills/`
 *
 * ---
 * This route is cached for up to 120 seconds
     * @returns any Known skills for the character
     * @throws ApiError
     */
    getCharactersCharacterIdSkills({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/skills/',
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
exports.SkillsService = SkillsService;
//# sourceMappingURL=SkillsService.js.map