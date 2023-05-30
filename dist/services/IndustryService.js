"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndustryService = void 0;
class IndustryService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List character industry jobs
     * List industry jobs placed by a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/industry/jobs/`
 *
 * Alternate route: `/legacy/characters/{character_id}/industry/jobs/`
 *
 * Alternate route: `/v1/characters/{character_id}/industry/jobs/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any Industry jobs placed by a character
     * @throws ApiError
     */
    getCharactersCharacterIdIndustryJobs({ characterId, datasource = 'tranquility', ifNoneMatch, includeCompleted, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/industry/jobs/',
            path: {
                'character_id': characterId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'include_completed': includeCompleted,
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
     * Character mining ledger
     * Paginated record of all mining done by a character for the past 30 days
 *
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mining/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mining/`
 *
 * Alternate route: `/v1/characters/{character_id}/mining/`
 *
 * ---
 * This route is cached for up to 600 seconds
     * @returns any Mining ledger of a character
     * @throws ApiError
     */
    getCharactersCharacterIdMining({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/mining/',
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
     * Moon extraction timers
     * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
 *
 *
 * ---
 * Alternate route: `/dev/corporation/{corporation_id}/mining/extractions/`
 *
 * Alternate route: `/legacy/corporation/{corporation_id}/mining/extractions/`
 *
 * Alternate route: `/v1/corporation/{corporation_id}/mining/extractions/`
 *
 * ---
 * This route is cached for up to 1800 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Station_Manager
 *
     * @returns any A list of chunk timers
     * @throws ApiError
     */
    getCorporationCorporationIdMiningExtractions({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporation/{corporation_id}/mining/extractions/',
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
     * Corporation mining observers
     * Paginated list of all entities capable of observing and recording mining for a corporation
 *
 *
 * ---
 * Alternate route: `/dev/corporation/{corporation_id}/mining/observers/`
 *
 * Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/`
 *
 * Alternate route: `/v1/corporation/{corporation_id}/mining/observers/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Accountant
 *
     * @returns any Observer list of a corporation
     * @throws ApiError
     */
    getCorporationCorporationIdMiningObservers({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporation/{corporation_id}/mining/observers/',
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
     * Observed corporation mining
     * Paginated record of all mining seen by an observer
 *
 *
 * ---
 * Alternate route: `/dev/corporation/{corporation_id}/mining/observers/{observer_id}/`
 *
 * Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/`
 *
 * Alternate route: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Accountant
 *
     * @returns any Mining ledger of an observer
     * @throws ApiError
     */
    getCorporationCorporationIdMiningObserversObserverId({ corporationId, observerId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporation/{corporation_id}/mining/observers/{observer_id}/',
            path: {
                'corporation_id': corporationId,
                'observer_id': observerId,
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
     * List corporation industry jobs
     * List industry jobs run by a corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/industry/jobs/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/industry/jobs/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/industry/jobs/`
 *
 * ---
 * This route is cached for up to 300 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Factory_Manager
 *
     * @returns any A list of corporation industry jobs
     * @throws ApiError
     */
    getCorporationsCorporationIdIndustryJobs({ corporationId, datasource = 'tranquility', ifNoneMatch, includeCompleted = false, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/industry/jobs/',
            path: {
                'corporation_id': corporationId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'include_completed': includeCompleted,
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
     * List industry facilities
     * Return a list of industry facilities
 *
 * ---
 * Alternate route: `/dev/industry/facilities/`
 *
 * Alternate route: `/legacy/industry/facilities/`
 *
 * Alternate route: `/v1/industry/facilities/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of facilities
     * @throws ApiError
     */
    getIndustryFacilities({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/industry/facilities/',
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
     * List solar system cost indices
     * Return cost indices for solar systems
 *
 * ---
 * Alternate route: `/dev/industry/systems/`
 *
 * Alternate route: `/legacy/industry/systems/`
 *
 * Alternate route: `/v1/industry/systems/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of cost indicies
     * @throws ApiError
     */
    getIndustrySystems({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/industry/systems/',
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
exports.IndustryService = IndustryService;
//# sourceMappingURL=IndustryService.js.map