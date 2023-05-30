"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesService = void 0;
class RoutesService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get route
     * Get the systems between origin and destination
 *
 * ---
 * Alternate route: `/dev/route/{origin}/{destination}/`
 *
 * Alternate route: `/legacy/route/{origin}/{destination}/`
 *
 * Alternate route: `/v1/route/{origin}/{destination}/`
 *
 * ---
 * This route is cached for up to 86400 seconds
     * @returns number Solar systems in route from origin to destination
     * @throws ApiError
     */
    getRouteOriginDestination({ destination, origin, avoid, connections, datasource = 'tranquility', flag = 'shortest', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/route/{origin}/{destination}/',
            path: {
                'destination': destination,
                'origin': origin,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'avoid': avoid,
                'connections': connections,
                'datasource': datasource,
                'flag': flag,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `No route found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.RoutesService = RoutesService;
//# sourceMappingURL=RoutesService.js.map