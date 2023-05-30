"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniverseService = void 0;
class UniverseService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get ancestries
     * Get all character ancestries
 *
 * ---
 * Alternate route: `/legacy/universe/ancestries/`
 *
 * Alternate route: `/v1/universe/ancestries/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any A list of ancestries
     * @throws ApiError
     */
    getUniverseAncestries({ acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/ancestries/',
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
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
     * Get asteroid belt information
     * Get information on an asteroid belt
 *
 * ---
 * Alternate route: `/legacy/universe/asteroid_belts/{asteroid_belt_id}/`
 *
 * Alternate route: `/v1/universe/asteroid_belts/{asteroid_belt_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about an asteroid belt
     * @throws ApiError
     */
    getUniverseAsteroidBeltsAsteroidBeltId({ asteroidBeltId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/asteroid_belts/{asteroid_belt_id}/',
            path: {
                'asteroid_belt_id': asteroidBeltId,
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
                404: `Asteroid belt not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get bloodlines
     * Get a list of bloodlines
 *
 * ---
 * Alternate route: `/legacy/universe/bloodlines/`
 *
 * Alternate route: `/v1/universe/bloodlines/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any A list of bloodlines
     * @throws ApiError
     */
    getUniverseBloodlines({ acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/bloodlines/',
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
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
     * Get item categories
     * Get a list of item categories
 *
 * ---
 * Alternate route: `/legacy/universe/categories/`
 *
 * Alternate route: `/v1/universe/categories/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of item category ids
     * @throws ApiError
     */
    getUniverseCategories({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/categories/',
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
     * Get item category information
     * Get information of an item category
 *
 * ---
 * Alternate route: `/legacy/universe/categories/{category_id}/`
 *
 * Alternate route: `/v1/universe/categories/{category_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about an item category
     * @throws ApiError
     */
    getUniverseCategoriesCategoryId({ categoryId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/categories/{category_id}/',
            path: {
                'category_id': categoryId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Category not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get constellations
     * Get a list of constellations
 *
 * ---
 * Alternate route: `/legacy/universe/constellations/`
 *
 * Alternate route: `/v1/universe/constellations/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of constellation ids
     * @throws ApiError
     */
    getUniverseConstellations({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/constellations/',
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
     * Get constellation information
     * Get information on a constellation
 *
 * ---
 * Alternate route: `/legacy/universe/constellations/{constellation_id}/`
 *
 * Alternate route: `/v1/universe/constellations/{constellation_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a constellation
     * @throws ApiError
     */
    getUniverseConstellationsConstellationId({ constellationId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/constellations/{constellation_id}/',
            path: {
                'constellation_id': constellationId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Constellation not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get factions
     * Get a list of factions
 *
 * ---
 * Alternate route: `/dev/universe/factions/`
 *
 * Alternate route: `/v2/universe/factions/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any A list of factions
     * @throws ApiError
     */
    getUniverseFactions({ acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/factions/',
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
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
     * Get graphics
     * Get a list of graphics
 *
 * ---
 * Alternate route: `/legacy/universe/graphics/`
 *
 * Alternate route: `/v1/universe/graphics/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of graphic ids
     * @throws ApiError
     */
    getUniverseGraphics({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/graphics/',
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
     * Get graphic information
     * Get information on a graphic
 *
 * ---
 * Alternate route: `/dev/universe/graphics/{graphic_id}/`
 *
 * Alternate route: `/legacy/universe/graphics/{graphic_id}/`
 *
 * Alternate route: `/v1/universe/graphics/{graphic_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a graphic
     * @throws ApiError
     */
    getUniverseGraphicsGraphicId({ graphicId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/graphics/{graphic_id}/',
            path: {
                'graphic_id': graphicId,
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
                404: `Graphic not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get item groups
     * Get a list of item groups
 *
 * ---
 * Alternate route: `/legacy/universe/groups/`
 *
 * Alternate route: `/v1/universe/groups/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of item group ids
     * @throws ApiError
     */
    getUniverseGroups({ datasource = 'tranquility', ifNoneMatch, page = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/groups/',
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
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get item group information
     * Get information on an item group
 *
 * ---
 * Alternate route: `/dev/universe/groups/{group_id}/`
 *
 * Alternate route: `/legacy/universe/groups/{group_id}/`
 *
 * Alternate route: `/v1/universe/groups/{group_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about an item group
     * @throws ApiError
     */
    getUniverseGroupsGroupId({ groupId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/groups/{group_id}/',
            path: {
                'group_id': groupId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Group not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Bulk names to IDs
     * Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours
 *
 * ---
 * Alternate route: `/dev/universe/ids/`
 *
 * Alternate route: `/legacy/universe/ids/`
 *
 * Alternate route: `/v1/universe/ids/`
 *
     * @returns any List of id/name associations for a set of names divided by category. Any name passed in that did not have a match will be ommitted
     * @throws ApiError
     */
    postUniverseIds({ names, acceptLanguage = 'en', datasource = 'tranquility', language = 'en', }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/universe/ids/',
            headers: {
                'Accept-Language': acceptLanguage,
            },
            query: {
                'datasource': datasource,
                'language': language,
            },
            body: names,
            errors: {
                400: `Bad request`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get moon information
     * Get information on a moon
 *
 * ---
 * Alternate route: `/legacy/universe/moons/{moon_id}/`
 *
 * Alternate route: `/v1/universe/moons/{moon_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a moon
     * @throws ApiError
     */
    getUniverseMoonsMoonId({ moonId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/moons/{moon_id}/',
            path: {
                'moon_id': moonId,
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
                404: `Moon not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get names and categories for a set of IDs
     * Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions
 *
 * ---
 * Alternate route: `/dev/universe/names/`
 *
 * Alternate route: `/v3/universe/names/`
 *
     * @returns any List of id/name associations for a set of IDs. All IDs must resolve to a name, or nothing will be returned
     * @throws ApiError
     */
    postUniverseNames({ ids, datasource = 'tranquility', }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/universe/names/',
            query: {
                'datasource': datasource,
            },
            body: ids,
            errors: {
                400: `Bad request`,
                404: `Ensure all IDs are valid before resolving`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get planet information
     * Get information on a planet
 *
 * ---
 * Alternate route: `/legacy/universe/planets/{planet_id}/`
 *
 * Alternate route: `/v1/universe/planets/{planet_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a planet
     * @throws ApiError
     */
    getUniversePlanetsPlanetId({ planetId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/planets/{planet_id}/',
            path: {
                'planet_id': planetId,
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
                404: `Planet not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get character races
     * Get a list of character races
 *
 * ---
 * Alternate route: `/dev/universe/races/`
 *
 * Alternate route: `/legacy/universe/races/`
 *
 * Alternate route: `/v1/universe/races/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any A list of character races
     * @throws ApiError
     */
    getUniverseRaces({ acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/races/',
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
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
     * Get regions
     * Get a list of regions
 *
 * ---
 * Alternate route: `/legacy/universe/regions/`
 *
 * Alternate route: `/v1/universe/regions/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of region ids
     * @throws ApiError
     */
    getUniverseRegions({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/regions/',
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
     * Get region information
     * Get information on a region
 *
 * ---
 * Alternate route: `/legacy/universe/regions/{region_id}/`
 *
 * Alternate route: `/v1/universe/regions/{region_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a region
     * @throws ApiError
     */
    getUniverseRegionsRegionId({ regionId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/regions/{region_id}/',
            path: {
                'region_id': regionId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Region not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get stargate information
     * Get information on a stargate
 *
 * ---
 * Alternate route: `/legacy/universe/stargates/{stargate_id}/`
 *
 * Alternate route: `/v1/universe/stargates/{stargate_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a stargate
     * @throws ApiError
     */
    getUniverseStargatesStargateId({ stargateId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/stargates/{stargate_id}/',
            path: {
                'stargate_id': stargateId,
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
                404: `Stargate not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get star information
     * Get information on a star
 *
 * ---
 * Alternate route: `/legacy/universe/stars/{star_id}/`
 *
 * Alternate route: `/v1/universe/stars/{star_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a star
     * @throws ApiError
     */
    getUniverseStarsStarId({ starId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/stars/{star_id}/',
            path: {
                'star_id': starId,
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
     * Get station information
     * Get information on a station
 *
 * ---
 * Alternate route: `/dev/universe/stations/{station_id}/`
 *
 * Alternate route: `/v2/universe/stations/{station_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a station
     * @throws ApiError
     */
    getUniverseStationsStationId({ stationId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/stations/{station_id}/',
            path: {
                'station_id': stationId,
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
                404: `Station not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * List all public structures
     * List all public structures
 *
 * ---
 * Alternate route: `/dev/universe/structures/`
 *
 * Alternate route: `/legacy/universe/structures/`
 *
 * Alternate route: `/v1/universe/structures/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns number List of public structure IDs
     * @throws ApiError
     */
    getUniverseStructures({ datasource = 'tranquility', filter, ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/structures/',
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'filter': filter,
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
     * Get structure information
     * Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
 *
 * ---
 * Alternate route: `/v2/universe/structures/{structure_id}/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Data about a structure
     * @throws ApiError
     */
    getUniverseStructuresStructureId({ structureId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/structures/{structure_id}/',
            path: {
                'structure_id': structureId,
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
                404: `Structure not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get system jumps
     * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed
 *
 * ---
 * Alternate route: `/legacy/universe/system_jumps/`
 *
 * Alternate route: `/v1/universe/system_jumps/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of systems and number of jumps
     * @throws ApiError
     */
    getUniverseSystemJumps({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/system_jumps/',
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
     * Get system kills
     * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed
 *
 * ---
 * Alternate route: `/v2/universe/system_kills/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of systems and number of ship, pod and NPC kills
     * @throws ApiError
     */
    getUniverseSystemKills({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/system_kills/',
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
     * Get solar systems
     * Get a list of solar systems
 *
 * ---
 * Alternate route: `/dev/universe/systems/`
 *
 * Alternate route: `/legacy/universe/systems/`
 *
 * Alternate route: `/v1/universe/systems/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of solar system ids
     * @throws ApiError
     */
    getUniverseSystems({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/systems/',
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
     * Get solar system information
     * Get information on a solar system.
 *
 * ---
 * Alternate route: `/dev/universe/systems/{system_id}/`
 *
 * Alternate route: `/v4/universe/systems/{system_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a solar system
     * @throws ApiError
     */
    getUniverseSystemsSystemId({ systemId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/systems/{system_id}/',
            path: {
                'system_id': systemId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Solar system not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get types
     * Get a list of type ids
 *
 * ---
 * Alternate route: `/legacy/universe/types/`
 *
 * Alternate route: `/v1/universe/types/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of type ids
     * @throws ApiError
     */
    getUniverseTypes({ datasource = 'tranquility', ifNoneMatch, page = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/types/',
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
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get type information
     * Get information on a type
 *
 * ---
 * Alternate route: `/dev/universe/types/{type_id}/`
 *
 * Alternate route: `/v3/universe/types/{type_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about a type
     * @throws ApiError
     */
    getUniverseTypesTypeId({ typeId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/universe/types/{type_id}/',
            path: {
                'type_id': typeId,
            },
            headers: {
                'Accept-Language': acceptLanguage,
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'language': language,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Type not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.UniverseService = UniverseService;
//# sourceMappingURL=UniverseService.js.map