"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsService = void 0;
class ContactsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get alliance contacts
     * Return contacts of an alliance
 *
 * ---
 * Alternate route: `/dev/alliances/{alliance_id}/contacts/`
 *
 * Alternate route: `/v2/alliances/{alliance_id}/contacts/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of contacts
     * @throws ApiError
     */
    getAlliancesAllianceIdContacts({ allianceId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/alliances/{alliance_id}/contacts/',
            path: {
                'alliance_id': allianceId,
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
     * Get alliance contact labels
     * Return custom labels for an alliance's contacts
 *
 * ---
 * Alternate route: `/dev/alliances/{alliance_id}/contacts/labels/`
 *
 * Alternate route: `/legacy/alliances/{alliance_id}/contacts/labels/`
 *
 * Alternate route: `/v1/alliances/{alliance_id}/contacts/labels/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of alliance contact labels
     * @throws ApiError
     */
    getAlliancesAllianceIdContactsLabels({ allianceId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/alliances/{alliance_id}/contacts/labels/',
            path: {
                'alliance_id': allianceId,
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
     * Delete contacts
     * Bulk delete contacts
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/`
 *
 * Alternate route: `/v2/characters/{character_id}/contacts/`
 *
     * @returns void
     * @throws ApiError
     */
    deleteCharactersCharacterIdContacts({ characterId, contactIds, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/characters/{character_id}/contacts/',
            path: {
                'character_id': characterId,
            },
            query: {
                'contact_ids': contactIds,
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
     * Get contacts
     * Return contacts of a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/`
 *
 * Alternate route: `/v2/characters/{character_id}/contacts/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of contacts
     * @throws ApiError
     */
    getCharactersCharacterIdContacts({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/contacts/',
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
     * Add contacts
     * Bulk add contacts with same settings
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/`
 *
 * Alternate route: `/v2/characters/{character_id}/contacts/`
 *
     * @returns number A list of contact ids that successfully created
     * @throws ApiError
     */
    postCharactersCharacterIdContacts({ characterId, contactIds, standing, datasource = 'tranquility', labelIds, token, watched = false, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/characters/{character_id}/contacts/',
            path: {
                'character_id': characterId,
            },
            query: {
                'datasource': datasource,
                'label_ids': labelIds,
                'standing': standing,
                'token': token,
                'watched': watched,
            },
            body: contactIds,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
                520: `Internal error thrown from the EVE server`,
            },
        });
    }
    /**
     * Edit contacts
     * Bulk edit contacts with same settings
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/`
 *
 * Alternate route: `/v2/characters/{character_id}/contacts/`
 *
     * @returns void
     * @throws ApiError
     */
    putCharactersCharacterIdContacts({ characterId, contactIds, standing, datasource = 'tranquility', labelIds, token, watched = false, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/characters/{character_id}/contacts/',
            path: {
                'character_id': characterId,
            },
            query: {
                'datasource': datasource,
                'label_ids': labelIds,
                'standing': standing,
                'token': token,
                'watched': watched,
            },
            body: contactIds,
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
     * Get contact labels
     * Return custom labels for a character's contacts
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/contacts/labels/`
 *
 * Alternate route: `/legacy/characters/{character_id}/contacts/labels/`
 *
 * Alternate route: `/v1/characters/{character_id}/contacts/labels/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of contact labels
     * @throws ApiError
     */
    getCharactersCharacterIdContactsLabels({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/contacts/labels/',
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
     * Get corporation contacts
     * Return contacts of a corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contacts/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/contacts/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of contacts
     * @throws ApiError
     */
    getCorporationsCorporationIdContacts({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/contacts/',
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
     * Get corporation contact labels
     * Return custom labels for a corporation's contacts
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contacts/labels/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/contacts/labels/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/contacts/labels/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of corporation contact labels
     * @throws ApiError
     */
    getCorporationsCorporationIdContactsLabels({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/contacts/labels/',
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
exports.ContactsService = ContactsService;
//# sourceMappingURL=ContactsService.js.map