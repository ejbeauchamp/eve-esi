"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SovereigntyService = void 0;
class SovereigntyService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List sovereignty campaigns
     * Shows sovereignty data for campaigns.
 *
 * ---
 * Alternate route: `/dev/sovereignty/campaigns/`
 *
 * Alternate route: `/legacy/sovereignty/campaigns/`
 *
 * Alternate route: `/v1/sovereignty/campaigns/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns any A list of sovereignty campaigns
     * @throws ApiError
     */
    getSovereigntyCampaigns({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sovereignty/campaigns/',
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
     * List sovereignty of systems
     * Shows sovereignty information for solar systems
 *
 * ---
 * Alternate route: `/dev/sovereignty/map/`
 *
 * Alternate route: `/legacy/sovereignty/map/`
 *
 * Alternate route: `/v1/sovereignty/map/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of sovereignty information for solar systems in New Eden
     * @throws ApiError
     */
    getSovereigntyMap({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sovereignty/map/',
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
     * List sovereignty structures
     * Shows sovereignty data for structures.
 *
 * ---
 * Alternate route: `/dev/sovereignty/structures/`
 *
 * Alternate route: `/legacy/sovereignty/structures/`
 *
 * Alternate route: `/v1/sovereignty/structures/`
 *
 * ---
 * This route is cached for up to 120 seconds
     * @returns any A list of sovereignty structures
     * @throws ApiError
     */
    getSovereigntyStructures({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/sovereignty/structures/',
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
exports.SovereigntyService = SovereigntyService;
//# sourceMappingURL=SovereigntyService.js.map