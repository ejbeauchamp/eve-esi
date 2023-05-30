"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncursionsService = void 0;
class IncursionsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List incursions
     * Return a list of current incursions
 *
 * ---
 * Alternate route: `/dev/incursions/`
 *
 * Alternate route: `/legacy/incursions/`
 *
 * Alternate route: `/v1/incursions/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of incursions
     * @throws ApiError
     */
    getIncursions({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/incursions/',
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
exports.IncursionsService = IncursionsService;
//# sourceMappingURL=IncursionsService.js.map