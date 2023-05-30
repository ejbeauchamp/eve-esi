"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetsService = void 0;
class FleetsService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get character fleet info
     * Return the fleet ID the character is in, if any.
 *
 * ---
 * Alternate route: `/legacy/characters/{character_id}/fleet/`
 *
 * Alternate route: `/v1/characters/{character_id}/fleet/`
 *
 * ---
 * This route is cached for up to 60 seconds
 *
 * ---
 * Warning: This route has an upgrade available
 *
 * ---
 * [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/fleet/)
     * @returns any Details about the character's fleet
     * @throws ApiError
     */
    getCharactersCharacterIdFleet({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/fleet/',
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
                404: `The character is not in a fleet`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get fleet information
     * Return details about a fleet
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns any Details about a fleet
     * @throws ApiError
     */
    getFleetsFleetId({ fleetId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fleets/{fleet_id}/',
            path: {
                'fleet_id': fleetId,
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
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Update fleet
     * Update settings about a fleet
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    putFleetsFleetId({ fleetId, newSettings, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/fleets/{fleet_id}/',
            path: {
                'fleet_id': fleetId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: newSettings,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get fleet members
     * Return information about fleet members
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/members/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/members/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/members/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns any A list of fleet members
     * @throws ApiError
     */
    getFleetsFleetIdMembers({ fleetId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fleets/{fleet_id}/members/',
            path: {
                'fleet_id': fleetId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
                'token': token,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Create fleet invitation
     * Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/members/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/members/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/members/`
 *
     * @returns void
     * @throws ApiError
     */
    postFleetsFleetIdMembers({ fleetId, invitation, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fleets/{fleet_id}/members/',
            path: {
                'fleet_id': fleetId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: invitation,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                422: `Errors in invitation`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Kick fleet member
     * Kick a fleet member
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    deleteFleetsFleetIdMembersMemberId({ fleetId, memberId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fleets/{fleet_id}/members/{member_id}/',
            path: {
                'fleet_id': fleetId,
                'member_id': memberId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Move fleet member
     * Move a fleet member around
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    putFleetsFleetIdMembersMemberId({ fleetId, memberId, movement, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/fleets/{fleet_id}/members/{member_id}/',
            path: {
                'fleet_id': fleetId,
                'member_id': memberId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: movement,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                422: `Errors in invitation`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Delete fleet squad
     * Delete a fleet squad, only empty squads can be deleted
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    deleteFleetsFleetIdSquadsSquadId({ fleetId, squadId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fleets/{fleet_id}/squads/{squad_id}/',
            path: {
                'fleet_id': fleetId,
                'squad_id': squadId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Rename fleet squad
     * Rename a fleet squad
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    putFleetsFleetIdSquadsSquadId({ fleetId, naming, squadId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/fleets/{fleet_id}/squads/{squad_id}/',
            path: {
                'fleet_id': fleetId,
                'squad_id': squadId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: naming,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get fleet wings
     * Return information about wings in a fleet
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/wings/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns any A list of fleet wings
     * @throws ApiError
     */
    getFleetsFleetIdWings({ fleetId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/fleets/{fleet_id}/wings/',
            path: {
                'fleet_id': fleetId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
                'token': token,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Create fleet wing
     * Create a new wing in a fleet
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/wings/`
 *
     * @returns any Wing created
     * @throws ApiError
     */
    postFleetsFleetIdWings({ fleetId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fleets/{fleet_id}/wings/',
            path: {
                'fleet_id': fleetId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Delete fleet wing
     * Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    deleteFleetsFleetIdWingsWingId({ fleetId, wingId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/fleets/{fleet_id}/wings/{wing_id}/',
            path: {
                'fleet_id': fleetId,
                'wing_id': wingId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Rename fleet wing
     * Rename a fleet wing
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    putFleetsFleetIdWingsWingId({ fleetId, naming, wingId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/fleets/{fleet_id}/wings/{wing_id}/',
            path: {
                'fleet_id': fleetId,
                'wing_id': wingId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: naming,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Create fleet squad
     * Create a new squad in a fleet
 *
 * ---
 * Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/squads/`
 *
 * Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/squads/`
 *
 * Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/squads/`
 *
     * @returns any Squad created
     * @throws ApiError
     */
    postFleetsFleetIdWingsWingIdSquads({ fleetId, wingId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/fleets/{fleet_id}/wings/{wing_id}/squads/',
            path: {
                'fleet_id': fleetId,
                'wing_id': wingId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `The fleet does not exist or you don't have access to it`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.FleetsService = FleetsService;
//# sourceMappingURL=FleetsService.js.map