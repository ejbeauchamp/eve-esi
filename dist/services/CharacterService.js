"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
class CharacterService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Character affiliation
     * Bulk lookup of character IDs to corporation, alliance and faction
 *
 * ---
 * Alternate route: `/dev/characters/affiliation/`
 *
 * Alternate route: `/v2/characters/affiliation/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Character corporation, alliance and faction IDs
     * @throws ApiError
     */
    postCharactersAffiliation({ characters, datasource = 'tranquility', }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/characters/affiliation/',
            query: {
                'datasource': datasource,
            },
            body: characters,
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
     * Get character's public information
     * Public information about a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/`
 *
 * Alternate route: `/legacy/characters/{character_id}/`
 *
 * Alternate route: `/v5/characters/{character_id}/`
 *
 * ---
 * This route is cached for up to 86400 seconds
     * @returns any Public data for the given character
     * @throws ApiError
     */
    getCharactersCharacterId({ characterId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/',
            path: {
                'character_id': characterId,
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
                404: `Character not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get agents research
     * Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/agents_research/`
 *
 * Alternate route: `/v2/characters/{character_id}/agents_research/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of agents research information
     * @throws ApiError
     */
    getCharactersCharacterIdAgentsResearch({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/agents_research/',
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
     * Get blueprints
     * Return a list of blueprints the character owns
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/blueprints/`
 *
 * Alternate route: `/v3/characters/{character_id}/blueprints/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of blueprints
     * @throws ApiError
     */
    getCharactersCharacterIdBlueprints({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/blueprints/',
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
     * Get corporation history
     * Get a list of all the corporations a character has been a member of
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/corporationhistory/`
 *
 * Alternate route: `/v2/characters/{character_id}/corporationhistory/`
 *
 * ---
 * This route is cached for up to 86400 seconds
     * @returns any Corporation history for the given character
     * @throws ApiError
     */
    getCharactersCharacterIdCorporationhistory({ characterId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/corporationhistory/',
            path: {
                'character_id': characterId,
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
     * Calculate a CSPA charge cost
     * Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/cspa/`
 *
 * Alternate route: `/v5/characters/{character_id}/cspa/`
 *
     * @returns number Aggregate cost of sending a mail from the source character to the target characters, in ISK
     * @throws ApiError
     */
    postCharactersCharacterIdCspa({ characterId, characters, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/characters/{character_id}/cspa/',
            path: {
                'character_id': characterId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: characters,
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
     * Get jump fatigue
     * Return a character's jump activation and fatigue information
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/fatigue/`
 *
 * Alternate route: `/v2/characters/{character_id}/fatigue/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any Jump activation and fatigue information
     * @throws ApiError
     */
    getCharactersCharacterIdFatigue({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/fatigue/',
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
     * Get medals
     * Return a list of medals the character has
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/medals/`
 *
 * Alternate route: `/v2/characters/{character_id}/medals/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of medals
     * @throws ApiError
     */
    getCharactersCharacterIdMedals({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/medals/',
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
     * Get character notifications
     * Return character notifications
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/notifications/`
 *
 * Alternate route: `/v5/characters/{character_id}/notifications/`
 *
 * Alternate route: `/v6/characters/{character_id}/notifications/`
 *
 * ---
 * This route is cached for up to 600 seconds
     * @returns any Returns your recent notifications
     * @throws ApiError
     */
    getCharactersCharacterIdNotifications({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/notifications/',
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
     * Get new contact notifications
     * Return notifications about having been added to someone's contact list
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/notifications/contacts/`
 *
 * Alternate route: `/v2/characters/{character_id}/notifications/contacts/`
 *
 * ---
 * This route is cached for up to 600 seconds
     * @returns any A list of contact notifications
     * @throws ApiError
     */
    getCharactersCharacterIdNotificationsContacts({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/notifications/contacts/',
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
     * Get character portraits
     * Get portrait urls for a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/portrait/`
 *
 * Alternate route: `/v2/characters/{character_id}/portrait/`
 *
 * Alternate route: `/v3/characters/{character_id}/portrait/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Public data for the given character
     * @throws ApiError
     */
    getCharactersCharacterIdPortrait({ characterId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/portrait/',
            path: {
                'character_id': characterId,
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
     * Get character corporation roles
     * Returns a character's corporation roles
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/roles/`
 *
 * Alternate route: `/v3/characters/{character_id}/roles/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any The character's roles in thier corporation
     * @throws ApiError
     */
    getCharactersCharacterIdRoles({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/roles/',
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
     * Get standings
     * Return character standings from agents, NPC corporations, and factions
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/standings/`
 *
 * Alternate route: `/v2/characters/{character_id}/standings/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of standings
     * @throws ApiError
     */
    getCharactersCharacterIdStandings({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/standings/',
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
     * Get character corporation titles
     * Returns a character's titles
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/titles/`
 *
 * Alternate route: `/v2/characters/{character_id}/titles/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of titles
     * @throws ApiError
     */
    getCharactersCharacterIdTitles({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/titles/',
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
}
exports.CharacterService = CharacterService;
//# sourceMappingURL=CharacterService.js.map