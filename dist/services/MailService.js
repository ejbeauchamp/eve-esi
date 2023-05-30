"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
class MailService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Return mail headers
     * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mail/`
 *
 * Alternate route: `/v1/characters/{character_id}/mail/`
 *
 * ---
 * This route is cached for up to 30 seconds
     * @returns any The requested mail
     * @throws ApiError
     */
    getCharactersCharacterIdMail({ characterId, datasource = 'tranquility', ifNoneMatch, labels, lastMailId, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/mail/',
            path: {
                'character_id': characterId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'labels': labels,
                'last_mail_id': lastMailId,
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
     * Send a new mail
     * Create and send a new mail
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mail/`
 *
 * Alternate route: `/v1/characters/{character_id}/mail/`
 *
     * @returns number Mail created
     * @throws ApiError
     */
    postCharactersCharacterIdMail({ characterId, mail, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/characters/{character_id}/mail/',
            path: {
                'character_id': characterId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: mail,
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
                520: `Internal error thrown from the EVE server. Most of the time this means you have hit an EVE server rate limit`,
            },
        });
    }
    /**
     * Get mail labels and unread counts
     * Return a list of the users mail labels, unread counts for each label and a total unread count.
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/labels/`
 *
 * Alternate route: `/v3/characters/{character_id}/mail/labels/`
 *
 * ---
 * This route is cached for up to 30 seconds
     * @returns any A list of mail labels and unread counts
     * @throws ApiError
     */
    getCharactersCharacterIdMailLabels({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/mail/labels/',
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
     * Create a mail label
     * Create a mail label
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/labels/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mail/labels/`
 *
 * Alternate route: `/v2/characters/{character_id}/mail/labels/`
 *
     * @returns number Label created
     * @throws ApiError
     */
    postCharactersCharacterIdMailLabels({ characterId, label, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'POST',
            url: '/characters/{character_id}/mail/labels/',
            path: {
                'character_id': characterId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: label,
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
     * Delete a mail label
     * Delete a mail label
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/labels/{label_id}/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mail/labels/{label_id}/`
 *
 * Alternate route: `/v1/characters/{character_id}/mail/labels/{label_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    deleteCharactersCharacterIdMailLabelsLabelId({ characterId, labelId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/characters/{character_id}/mail/labels/{label_id}/',
            path: {
                'character_id': characterId,
                'label_id': labelId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            errors: {
                400: `Bad request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                420: `Error limited`,
                422: `Default labels cannot be deleted`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Return mailing list subscriptions
     * Return all mailing lists that the character is subscribed to
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/lists/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mail/lists/`
 *
 * Alternate route: `/v1/characters/{character_id}/mail/lists/`
 *
 * ---
 * This route is cached for up to 120 seconds
     * @returns any Mailing lists
     * @throws ApiError
     */
    getCharactersCharacterIdMailLists({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/mail/lists/',
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
     * Delete a mail
     * Delete a mail
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
 *
 * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    deleteCharactersCharacterIdMailMailId({ characterId, mailId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/characters/{character_id}/mail/{mail_id}/',
            path: {
                'character_id': characterId,
                'mail_id': mailId,
            },
            query: {
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
     * Return a mail
     * Return the contents of an EVE mail
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
 *
 * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
 *
 * ---
 * This route is cached for up to 30 seconds
     * @returns any Contents of a mail
     * @throws ApiError
     */
    getCharactersCharacterIdMailMailId({ characterId, mailId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/mail/{mail_id}/',
            path: {
                'character_id': characterId,
                'mail_id': mailId,
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
                404: `Mail not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Update metadata about a mail
     * Update metadata about a mail
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`
 *
 * Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`
 *
 * Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`
 *
     * @returns void
     * @throws ApiError
     */
    putCharactersCharacterIdMailMailId({ characterId, contents, mailId, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/characters/{character_id}/mail/{mail_id}/',
            path: {
                'character_id': characterId,
                'mail_id': mailId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: contents,
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
}
exports.MailService = MailService;
//# sourceMappingURL=MailService.js.map