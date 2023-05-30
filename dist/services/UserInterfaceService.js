"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInterfaceService = void 0;
class UserInterfaceService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Set Autopilot Waypoint
     * Set a solar system as autopilot waypoint
 *
 * ---
 * Alternate route: `/dev/ui/autopilot/waypoint/`
 *
 * Alternate route: `/legacy/ui/autopilot/waypoint/`
 *
 * Alternate route: `/v2/ui/autopilot/waypoint/`
 *
     * @returns void
     * @throws ApiError
     */
    postUiAutopilotWaypoint({ destinationId, addToBeginning = false, clearOtherWaypoints = false, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ui/autopilot/waypoint/',
            query: {
                'add_to_beginning': addToBeginning,
                'clear_other_waypoints': clearOtherWaypoints,
                'datasource': datasource,
                'destination_id': destinationId,
                'token': token,
            },
            errors: {
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
     * Open Contract Window
     * Open the contract window inside the client
 *
 * ---
 * Alternate route: `/dev/ui/openwindow/contract/`
 *
 * Alternate route: `/legacy/ui/openwindow/contract/`
 *
 * Alternate route: `/v1/ui/openwindow/contract/`
 *
     * @returns void
     * @throws ApiError
     */
    postUiOpenwindowContract({ contractId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ui/openwindow/contract/',
            query: {
                'contract_id': contractId,
                'datasource': datasource,
                'token': token,
            },
            errors: {
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
     * Open Information Window
     * Open the information window for a character, corporation or alliance inside the client
 *
 * ---
 * Alternate route: `/dev/ui/openwindow/information/`
 *
 * Alternate route: `/legacy/ui/openwindow/information/`
 *
 * Alternate route: `/v1/ui/openwindow/information/`
 *
     * @returns void
     * @throws ApiError
     */
    postUiOpenwindowInformation({ targetId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ui/openwindow/information/',
            query: {
                'datasource': datasource,
                'target_id': targetId,
                'token': token,
            },
            errors: {
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
     * Open Market Details
     * Open the market details window for a specific typeID inside the client
 *
 * ---
 * Alternate route: `/dev/ui/openwindow/marketdetails/`
 *
 * Alternate route: `/legacy/ui/openwindow/marketdetails/`
 *
 * Alternate route: `/v1/ui/openwindow/marketdetails/`
 *
     * @returns void
     * @throws ApiError
     */
    postUiOpenwindowMarketdetails({ typeId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ui/openwindow/marketdetails/',
            query: {
                'datasource': datasource,
                'token': token,
                'type_id': typeId,
            },
            errors: {
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
     * Open New Mail Window
     * Open the New Mail window, according to settings from the request if applicable
 *
 * ---
 * Alternate route: `/dev/ui/openwindow/newmail/`
 *
 * Alternate route: `/legacy/ui/openwindow/newmail/`
 *
 * Alternate route: `/v1/ui/openwindow/newmail/`
 *
     * @returns void
     * @throws ApiError
     */
    postUiOpenwindowNewmail({ newMail, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/ui/openwindow/newmail/',
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: newMail,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                420: `Error limited`,
                422: `Invalid request`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.UserInterfaceService = UserInterfaceService;
//# sourceMappingURL=UserInterfaceService.js.map