"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorporationService = void 0;
class CorporationService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get npc corporations
     * Get a list of npc corporations
 *
 * ---
 * Alternate route: `/dev/corporations/npccorps/`
 *
 * Alternate route: `/v2/corporations/npccorps/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of npc corporation ids
     * @throws ApiError
     */
    getCorporationsNpccorps({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/npccorps/',
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
     * Get corporation information
     * Public information about a corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/`
 *
 * Alternate route: `/v5/corporations/{corporation_id}/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Public information about a corporation
     * @throws ApiError
     */
    getCorporationsCorporationId({ corporationId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/',
            path: {
                'corporation_id': corporationId,
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
                404: `Corporation not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get alliance history
     * Get a list of all the alliances a corporation has been a member of
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/alliancehistory/`
 *
 * Alternate route: `/v3/corporations/{corporation_id}/alliancehistory/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Alliance history for the given corporation
     * @throws ApiError
     */
    getCorporationsCorporationIdAlliancehistory({ corporationId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/alliancehistory/',
            path: {
                'corporation_id': corporationId,
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
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get corporation blueprints
     * Returns a list of blueprints the corporation owns
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/blueprints/`
 *
 * Alternate route: `/v3/corporations/{corporation_id}/blueprints/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of corporation blueprints
     * @throws ApiError
     */
    getCorporationsCorporationIdBlueprints({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/blueprints/',
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
     * Get all corporation ALSC logs
     * Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/containers/logs/`
 *
 * Alternate route: `/v3/corporations/{corporation_id}/containers/logs/`
 *
 * ---
 * This route is cached for up to 600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of corporation ALSC logs
     * @throws ApiError
     */
    getCorporationsCorporationIdContainersLogs({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/containers/logs/',
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
     * Get corporation divisions
     * Return corporation hangar and wallet division names, only show if a division is not using the default name
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/divisions/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/divisions/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of corporation division names
     * @throws ApiError
     */
    getCorporationsCorporationIdDivisions({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/divisions/',
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
     * Get corporation facilities
     * Return a corporation's facilities
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/facilities/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/facilities/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Factory_Manager
 *
     * @returns any List of corporation facilities
     * @throws ApiError
     */
    getCorporationsCorporationIdFacilities({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/facilities/',
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
     * Get corporation icon
     * Get the icon urls for a corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/icons/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/icons/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Urls for icons for the given corporation id and server
     * @throws ApiError
     */
    getCorporationsCorporationIdIcons({ corporationId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/icons/',
            path: {
                'corporation_id': corporationId,
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
                404: `No image server for this datasource`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get corporation medals
     * Returns a corporation's medals
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/medals/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/medals/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of medals
     * @throws ApiError
     */
    getCorporationsCorporationIdMedals({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/medals/',
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
     * Get corporation issued medals
     * Returns medals issued by a corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/medals/issued/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/medals/issued/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any A list of issued medals
     * @throws ApiError
     */
    getCorporationsCorporationIdMedalsIssued({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/medals/issued/',
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
     * Get corporation members
     * Return the current member list of a corporation, the token's character need to be a member of the corporation.
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/members/`
 *
 * Alternate route: `/v4/corporations/{corporation_id}/members/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns number List of member character IDs
     * @throws ApiError
     */
    getCorporationsCorporationIdMembers({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/members/',
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
     * Get corporation member limit
     * Return a corporation's member limit, not including CEO himself
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/members/limit/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/members/limit/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns number The corporation's member limit
     * @throws ApiError
     */
    getCorporationsCorporationIdMembersLimit({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/members/limit/',
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
     * Get corporation's members' titles
     * Returns a corporation's members' titles
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/members/titles/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/members/titles/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any A list of members and theirs titles
     * @throws ApiError
     */
    getCorporationsCorporationIdMembersTitles({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/members/titles/',
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
     * Track corporation members
     * Returns additional information about a corporation's members which helps tracking their activities
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/membertracking/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/membertracking/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of member character IDs
     * @throws ApiError
     */
    getCorporationsCorporationIdMembertracking({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/membertracking/',
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
     * Get corporation member roles
     * Return the roles of all members if the character has the personnel manager role or any grantable role.
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/roles/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/roles/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any List of member character ID's and roles
     * @throws ApiError
     */
    getCorporationsCorporationIdRoles({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/roles/',
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
     * Get corporation member roles history
     * Return how roles have changed for a coporation's members, up to a month
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/roles/history/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/roles/history/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of role changes
     * @throws ApiError
     */
    getCorporationsCorporationIdRolesHistory({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/roles/history/',
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
     * Get corporation shareholders
     * Return the current shareholders of a corporation.
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/shareholders/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/shareholders/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/shareholders/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of shareholders
     * @throws ApiError
     */
    getCorporationsCorporationIdShareholders({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/shareholders/',
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
     * Get corporation standings
     * Return corporation standings from agents, NPC corporations, and factions
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/standings/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/standings/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of standings
     * @throws ApiError
     */
    getCorporationsCorporationIdStandings({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/standings/',
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
     * Get corporation starbases (POSes)
     * Returns list of corporation starbases (POSes)
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/starbases/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/starbases/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of starbases (POSes)
     * @throws ApiError
     */
    getCorporationsCorporationIdStarbases({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/starbases/',
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
     * Get starbase (POS) detail
     * Returns various settings and fuels of a starbase (POS)
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/starbases/{starbase_id}/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/starbases/{starbase_id}/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any List of starbases (POSes)
     * @throws ApiError
     */
    getCorporationsCorporationIdStarbasesStarbaseId({ corporationId, starbaseId, systemId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/starbases/{starbase_id}/',
            path: {
                'corporation_id': corporationId,
                'starbase_id': starbaseId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'system_id': systemId,
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
     * Get corporation structures
     * Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/structures/`
 *
 * Alternate route: `/v4/corporations/{corporation_id}/structures/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Station_Manager
 *
     * @returns any List of corporation structures' information
     * @throws ApiError
     */
    getCorporationsCorporationIdStructures({ corporationId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/structures/',
            path: {
                'corporation_id': corporationId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
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
     * Get corporation titles
     * Returns a corporation's titles
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/titles/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/titles/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any A list of titles
     * @throws ApiError
     */
    getCorporationsCorporationIdTitles({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/titles/',
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
}
exports.CorporationService = CorporationService;
//# sourceMappingURL=CorporationService.js.map