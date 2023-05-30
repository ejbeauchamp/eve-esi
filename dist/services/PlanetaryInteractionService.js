"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanetaryInteractionService = void 0;
class PlanetaryInteractionService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get colonies
     * Returns a list of all planetary colonies owned by a character.
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/planets/`
 *
 * Alternate route: `/legacy/characters/{character_id}/planets/`
 *
 * Alternate route: `/v1/characters/{character_id}/planets/`
 *
 * ---
 * This route is cached for up to 600 seconds
     * @returns any List of colonies
     * @throws ApiError
     */
    getCharactersCharacterIdPlanets({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/planets/',
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
     * Get colony layout
     * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/planets/{planet_id}/`
 *
 * Alternate route: `/v3/characters/{character_id}/planets/{planet_id}/`
 *
     * @returns any Colony layout
     * @throws ApiError
     */
    getCharactersCharacterIdPlanetsPlanetId({ characterId, planetId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/planets/{planet_id}/',
            path: {
                'character_id': characterId,
                'planet_id': planetId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Colony not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * List corporation customs offices
     * List customs offices owned by a corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/customs_offices/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/customs_offices/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/customs_offices/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Director
 *
     * @returns any A list of customs offices and their settings
     * @throws ApiError
     */
    getCorporationsCorporationIdCustomsOffices({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/customs_offices/',
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
     * Get schematic information
     * Get information on a planetary factory schematic
 *
 * ---
 * Alternate route: `/dev/universe/schematics/{schematic_id}/`
 *
 * Alternate route: `/legacy/universe/schematics/{schematic_id}/`
 *
 * Alternate route: `/v1/universe/schematics/{schematic_id}/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Public data about a schematic
     * @throws ApiError
     */
    getUniverseSchematicsSchematicId({ schematicId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/schematics/{schematic_id}/',
            path: {
                'schematic_id': schematicId,
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
                404: `Schematic not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.PlanetaryInteractionService = PlanetaryInteractionService;
//# sourceMappingURL=PlanetaryInteractionService.js.map