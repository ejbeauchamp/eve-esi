"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpportunitiesService = void 0;
class OpportunitiesService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get a character's completed tasks
     * Return a list of tasks finished by a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/opportunities/`
 *
 * Alternate route: `/legacy/characters/{character_id}/opportunities/`
 *
 * Alternate route: `/v1/characters/{character_id}/opportunities/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of opportunities task ids
     * @throws ApiError
     */
    getCharactersCharacterIdOpportunities({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/opportunities/',
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
     * Get opportunities groups
     * Return a list of opportunities groups
 *
 * ---
 * Alternate route: `/dev/opportunities/groups/`
 *
 * Alternate route: `/legacy/opportunities/groups/`
 *
 * Alternate route: `/v1/opportunities/groups/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of opportunities group ids
     * @throws ApiError
     */
    getOpportunitiesGroups({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/opportunities/groups/',
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
     * Get opportunities group
     * Return information of an opportunities group
 *
 * ---
 * Alternate route: `/dev/opportunities/groups/{group_id}/`
 *
 * Alternate route: `/legacy/opportunities/groups/{group_id}/`
 *
 * Alternate route: `/v1/opportunities/groups/{group_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Details of an opportunities group
     * @throws ApiError
     */
    getOpportunitiesGroupsGroupId({ groupId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/opportunities/groups/{group_id}/',
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
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get opportunities tasks
     * Return a list of opportunities tasks
 *
 * ---
 * Alternate route: `/dev/opportunities/tasks/`
 *
 * Alternate route: `/legacy/opportunities/tasks/`
 *
 * Alternate route: `/v1/opportunities/tasks/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of opportunities task ids
     * @throws ApiError
     */
    getOpportunitiesTasks({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/opportunities/tasks/',
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
     * Get opportunities task
     * Return information of an opportunities task
 *
 * ---
 * Alternate route: `/dev/opportunities/tasks/{task_id}/`
 *
 * Alternate route: `/legacy/opportunities/tasks/{task_id}/`
 *
 * Alternate route: `/v1/opportunities/tasks/{task_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Details of an opportunities task
     * @throws ApiError
     */
    getOpportunitiesTasksTaskId({ taskId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/opportunities/tasks/{task_id}/',
            path: {
                'task_id': taskId,
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
}
exports.OpportunitiesService = OpportunitiesService;
//# sourceMappingURL=OpportunitiesService.js.map