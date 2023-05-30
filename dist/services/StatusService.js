"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusService = void 0;
class StatusService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Retrieve the uptime and player counts
     * EVE Server status
 *
 * ---
 * Alternate route: `/dev/status/`
 *
 * Alternate route: `/legacy/status/`
 *
 * Alternate route: `/v1/status/`
 *
 * Alternate route: `/v2/status/`
 *
 * ---
 * This route is cached for up to 30 seconds
     * @returns any Server status
     * @throws ApiError
     */
    getStatus({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/status/',
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
exports.StatusService = StatusService;
//# sourceMappingURL=StatusService.js.map