"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarsService = void 0;
class WarsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List wars
     * Return a list of wars
 *
 * ---
 * Alternate route: `/dev/wars/`
 *
 * Alternate route: `/legacy/wars/`
 *
 * Alternate route: `/v1/wars/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns number A list of war IDs, in descending order by war_id
     * @throws ApiError
     */
    getWars({ datasource = 'tranquility', ifNoneMatch, maxWarId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wars/',
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'max_war_id': maxWarId,
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
     * Get war information
     * Return details about a war
 *
 * ---
 * Alternate route: `/dev/wars/{war_id}/`
 *
 * Alternate route: `/legacy/wars/{war_id}/`
 *
 * Alternate route: `/v1/wars/{war_id}/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Details about a war
     * @throws ApiError
     */
    getWarsWarId({ warId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wars/{war_id}/',
            path: {
                'war_id': warId,
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
                422: `War not found`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * List kills for a war
     * Return a list of kills related to a war
 *
 * ---
 * Alternate route: `/dev/wars/{war_id}/killmails/`
 *
 * Alternate route: `/legacy/wars/{war_id}/killmails/`
 *
 * Alternate route: `/v1/wars/{war_id}/killmails/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of killmail IDs and hashes
     * @throws ApiError
     */
    getWarsWarIdKillmails({ warId, datasource = 'tranquility', ifNoneMatch, page = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/wars/{war_id}/killmails/',
            path: {
                'war_id': warId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'page': page,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                420: `Error limited`,
                422: `War not found`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.WarsService = WarsService;
//# sourceMappingURL=WarsService.js.map