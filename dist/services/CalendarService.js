"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarService = void 0;
class CalendarService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List calendar event summaries
     * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/calendar/`
 *
 * Alternate route: `/legacy/characters/{character_id}/calendar/`
 *
 * Alternate route: `/v1/characters/{character_id}/calendar/`
 *
 * Alternate route: `/v2/characters/{character_id}/calendar/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns any A collection of event summaries
     * @throws ApiError
     */
    getCharactersCharacterIdCalendar({ characterId, datasource = 'tranquility', fromEvent, ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/calendar/',
            path: {
                'character_id': characterId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'from_event': fromEvent,
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
     * Get an event
     * Get all the information for a specific event
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`
 *
 * Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`
 *
 * Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`
 *
 * Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns any Full details of a specific event
     * @throws ApiError
     */
    getCharactersCharacterIdCalendarEventId({ characterId, eventId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/calendar/{event_id}/',
            path: {
                'character_id': characterId,
                'event_id': eventId,
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
                404: `Not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Respond to an event
     * Set your response status to an event
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`
 *
 * Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/`
 *
 * Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`
 *
 * Alternate route: `/v4/characters/{character_id}/calendar/{event_id}/`
 *
 * ---
 * This route is cached for up to 5 seconds
     * @returns void
     * @throws ApiError
     */
    putCharactersCharacterIdCalendarEventId({ characterId, eventId, response, datasource = 'tranquility', token, }) {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/characters/{character_id}/calendar/{event_id}/',
            path: {
                'character_id': characterId,
                'event_id': eventId,
            },
            query: {
                'datasource': datasource,
                'token': token,
            },
            body: response,
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
     * Get attendees
     * Get all invited attendees for a given event
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/`
 *
 * Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/`
 *
 * Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/`
 *
 * Alternate route: `/v2/characters/{character_id}/calendar/{event_id}/attendees/`
 *
 * ---
 * This route is cached for up to 600 seconds
     * @returns any List of attendees
     * @throws ApiError
     */
    getCharactersCharacterIdCalendarEventIdAttendees({ characterId, eventId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/calendar/{event_id}/attendees/',
            path: {
                'character_id': characterId,
                'event_id': eventId,
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
                404: `Not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.CalendarService = CalendarService;
//# sourceMappingURL=CalendarService.js.map