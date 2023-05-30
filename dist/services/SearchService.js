"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
class SearchService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Search on a string
     * Search for entities that match a given sub-string.
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/search/`
 *
 * Alternate route: `/legacy/characters/{character_id}/search/`
 *
 * Alternate route: `/v3/characters/{character_id}/search/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of search results
     * @throws ApiError
     */
    getCharactersCharacterIdSearch({ categories, characterId, search, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', strict = false, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/search/',
            path: {
                'character_id': characterId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'categories': categories,
                'datasource': datasource,
                'language': language,
                'search': search,
                'strict': strict,
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
exports.SearchService = SearchService;
//# sourceMappingURL=SearchService.js.map