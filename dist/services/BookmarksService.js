"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookmarksService = void 0;
class BookmarksService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List bookmarks
     * A list of your character's personal bookmarks
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/bookmarks/`
 *
 * Alternate route: `/v2/characters/{character_id}/bookmarks/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of bookmarks
     * @throws ApiError
     */
    getCharactersCharacterIdBookmarks({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/bookmarks/',
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
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * List bookmark folders
     * A list of your character's personal bookmark folders
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/bookmarks/folders/`
 *
 * Alternate route: `/v2/characters/{character_id}/bookmarks/folders/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any List of bookmark folders
     * @throws ApiError
     */
    getCharactersCharacterIdBookmarksFolders({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/bookmarks/folders/',
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
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * List corporation bookmarks
     * A list of your corporation's bookmarks
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/bookmarks/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/bookmarks/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any List of corporation owned bookmarks
     * @throws ApiError
     */
    getCorporationsCorporationIdBookmarks({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/bookmarks/',
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
     * List corporation bookmark folders
     * A list of your corporation's bookmark folders
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/bookmarks/folders/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/folders/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/bookmarks/folders/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any List of corporation owned bookmark folders
     * @throws ApiError
     */
    getCorporationsCorporationIdBookmarksFolders({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/bookmarks/folders/',
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
}
exports.BookmarksService = BookmarksService;
//# sourceMappingURL=BookmarksService.js.map