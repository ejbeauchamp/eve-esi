"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KillmailsService = void 0;
class KillmailsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get a character's recent kills and losses
     * Return a list of a character's kills and losses going back 90 days
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/killmails/recent/`
 *
 * Alternate route: `/legacy/characters/{character_id}/killmails/recent/`
 *
 * Alternate route: `/v1/characters/{character_id}/killmails/recent/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of killmail IDs and hashes
     * @throws ApiError
     */
    getCharactersCharacterIdKillmailsRecent({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/killmails/recent/',
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
     * Get a corporation's recent kills and losses
     * Get a list of a corporation's kills and losses going back 90 days
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/`
 *
 * ---
 * This route is cached for up to 300 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any A list of killmail IDs and hashes
     * @throws ApiError
     */
    getCorporationsCorporationIdKillmailsRecent({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/killmails/recent/',
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
     * Get a single killmail
     * Return a single killmail from its ID and hash
 *
 * ---
 * Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/`
 *
 * Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/`
 *
 * Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/`
 *
 * ---
 * This route is cached for up to 30758400 seconds
     * @returns any A killmail
     * @throws ApiError
     */
    getKillmailsKillmailIdKillmailHash({ killmailHash, killmailId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/killmails/{killmail_id}/{killmail_hash}/',
            path: {
                'killmail_hash': killmailHash,
                'killmail_id': killmailId,
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
                420: `Error limited`,
                422: `Invalid killmail_id and/or killmail_hash`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.KillmailsService = KillmailsService;
//# sourceMappingURL=KillmailsService.js.map