"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FactionWarfareService = void 0;
class FactionWarfareService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Overview of a character involved in faction warfare
     * Statistical overview of a character involved in faction warfare
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/fw/stats/`
 *
 * Alternate route: `/legacy/characters/{character_id}/fw/stats/`
 *
 * Alternate route: `/v1/characters/{character_id}/fw/stats/`
 *
 * Alternate route: `/v2/characters/{character_id}/fw/stats/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Faction warfare statistics for a given character
     * @throws ApiError
     */
    getCharactersCharacterIdFwStats({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/fw/stats/',
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
     * Overview of a corporation involved in faction warfare
     * Statistics about a corporation involved in faction warfare
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/fw/stats/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/fw/stats/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/fw/stats/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/fw/stats/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Faction warfare statistics for a given corporation
     * @throws ApiError
     */
    getCorporationsCorporationIdFwStats({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/fw/stats/',
            path: {
                'corporation_id': corporationId,
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
     * List of the top factions in faction warfare
     * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
 *
 * ---
 * Alternate route: `/dev/fw/leaderboards/`
 *
 * Alternate route: `/legacy/fw/leaderboards/`
 *
 * Alternate route: `/v1/fw/leaderboards/`
 *
 * Alternate route: `/v2/fw/leaderboards/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Corporation leaderboard of kills and victory points within faction warfare
     * @throws ApiError
     */
    getFwLeaderboards({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fw/leaderboards/',
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
     * List of the top pilots in faction warfare
     * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
 *
 * ---
 * Alternate route: `/dev/fw/leaderboards/characters/`
 *
 * Alternate route: `/legacy/fw/leaderboards/characters/`
 *
 * Alternate route: `/v1/fw/leaderboards/characters/`
 *
 * Alternate route: `/v2/fw/leaderboards/characters/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Character leaderboard of kills and victory points within faction warfare
     * @throws ApiError
     */
    getFwLeaderboardsCharacters({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fw/leaderboards/characters/',
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
     * List of the top corporations in faction warfare
     * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
 *
 * ---
 * Alternate route: `/dev/fw/leaderboards/corporations/`
 *
 * Alternate route: `/legacy/fw/leaderboards/corporations/`
 *
 * Alternate route: `/v1/fw/leaderboards/corporations/`
 *
 * Alternate route: `/v2/fw/leaderboards/corporations/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Corporation leaderboard of kills and victory points within faction warfare
     * @throws ApiError
     */
    getFwLeaderboardsCorporations({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fw/leaderboards/corporations/',
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
     * An overview of statistics about factions involved in faction warfare
     * Statistical overviews of factions involved in faction warfare
 *
 * ---
 * Alternate route: `/dev/fw/stats/`
 *
 * Alternate route: `/legacy/fw/stats/`
 *
 * Alternate route: `/v1/fw/stats/`
 *
 * Alternate route: `/v2/fw/stats/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Per faction breakdown of faction warfare statistics
     * @throws ApiError
     */
    getFwStats({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fw/stats/',
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
     * Ownership of faction warfare systems
     * An overview of the current ownership of faction warfare solar systems
 *
 * ---
 * Alternate route: `/dev/fw/systems/`
 *
 * Alternate route: `/legacy/fw/systems/`
 *
 * Alternate route: `/v2/fw/systems/`
 *
 * Alternate route: `/v3/fw/systems/`
 *
 * ---
 * This route is cached for up to 1800 seconds
     * @returns any All faction warfare solar systems
     * @throws ApiError
     */
    getFwSystems({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fw/systems/',
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
     * Data about which NPC factions are at war
     * Data about which NPC factions are at war
 *
 * ---
 * Alternate route: `/dev/fw/wars/`
 *
 * Alternate route: `/legacy/fw/wars/`
 *
 * Alternate route: `/v1/fw/wars/`
 *
 * Alternate route: `/v2/fw/wars/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any A list of NPC factions at war
     * @throws ApiError
     */
    getFwWars({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fw/wars/',
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
}
exports.FactionWarfareService = FactionWarfareService;
//# sourceMappingURL=FactionWarfareService.js.map