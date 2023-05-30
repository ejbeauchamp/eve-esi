"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketService = void 0;
class MarketService {
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List open orders from a character
     * List open market orders placed by a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/orders/`
 *
 * Alternate route: `/v2/characters/{character_id}/orders/`
 *
 * ---
 * This route is cached for up to 1200 seconds
     * @returns any Open market orders placed by a character
     * @throws ApiError
     */
    getCharactersCharacterIdOrders({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/orders/',
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
     * List historical orders by a character
     * List cancelled and expired market orders placed by a character up to 90 days in the past.
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/orders/history/`
 *
 * Alternate route: `/legacy/characters/{character_id}/orders/history/`
 *
 * Alternate route: `/v1/characters/{character_id}/orders/history/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Expired and cancelled market orders placed by a character
     * @throws ApiError
     */
    getCharactersCharacterIdOrdersHistory({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/orders/history/',
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
     * List open orders from a corporation
     * List open market orders placed on behalf of a corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/orders/`
 *
 * Alternate route: `/v3/corporations/{corporation_id}/orders/`
 *
 * ---
 * This route is cached for up to 1200 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Trader
 *
     * @returns any A list of open market orders
     * @throws ApiError
     */
    getCorporationsCorporationIdOrders({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/orders/',
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
     * List historical orders from a corporation
     * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/orders/history/`
 *
 * Alternate route: `/v2/corporations/{corporation_id}/orders/history/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Trader
 *
     * @returns any Expired and cancelled market orders placed on behalf of a corporation
     * @throws ApiError
     */
    getCorporationsCorporationIdOrdersHistory({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/orders/history/',
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
     * Get item groups
     * Get a list of item groups
 *
 * ---
 * Alternate route: `/dev/markets/groups/`
 *
 * Alternate route: `/legacy/markets/groups/`
 *
 * Alternate route: `/v1/markets/groups/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns number A list of item group ids
     * @throws ApiError
     */
    getMarketsGroups({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/markets/groups/',
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
     * Get item group information
     * Get information on an item group
 *
 * ---
 * Alternate route: `/dev/markets/groups/{market_group_id}/`
 *
 * Alternate route: `/legacy/markets/groups/{market_group_id}/`
 *
 * Alternate route: `/v1/markets/groups/{market_group_id}/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any Information about an item group
     * @throws ApiError
     */
    getMarketsGroupsMarketGroupId({ marketGroupId, acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/markets/groups/{market_group_id}/',
            path: {
                'market_group_id': marketGroupId,
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
                404: `Market group not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * List market prices
     * Return a list of prices
 *
 * ---
 * Alternate route: `/dev/markets/prices/`
 *
 * Alternate route: `/legacy/markets/prices/`
 *
 * Alternate route: `/v1/markets/prices/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of prices
     * @throws ApiError
     */
    getMarketsPrices({ datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/markets/prices/',
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
     * List orders in a structure
     * Return all orders in a structure
 *
 * ---
 * Alternate route: `/dev/markets/structures/{structure_id}/`
 *
 * Alternate route: `/legacy/markets/structures/{structure_id}/`
 *
 * Alternate route: `/v1/markets/structures/{structure_id}/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of orders
     * @throws ApiError
     */
    getMarketsStructuresStructureId({ structureId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/markets/structures/{structure_id}/',
            path: {
                'structure_id': structureId,
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
     * List historical market statistics in a region
     * Return a list of historical market statistics for the specified type in a region
 *
 * ---
 * Alternate route: `/dev/markets/{region_id}/history/`
 *
 * Alternate route: `/legacy/markets/{region_id}/history/`
 *
 * Alternate route: `/v1/markets/{region_id}/history/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any A list of historical market statistics
     * @throws ApiError
     */
    getMarketsRegionIdHistory({ regionId, typeId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/markets/{region_id}/history/',
            path: {
                'region_id': regionId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'type_id': typeId,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Type not found`,
                420: `Error limited`,
                422: `Not found`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
                520: `Internal error thrown from the EVE server`,
            },
        });
    }
    /**
     * List orders in a region
     * Return a list of orders in a region
 *
 * ---
 * Alternate route: `/dev/markets/{region_id}/orders/`
 *
 * Alternate route: `/legacy/markets/{region_id}/orders/`
 *
 * Alternate route: `/v1/markets/{region_id}/orders/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of orders
     * @throws ApiError
     */
    getMarketsRegionIdOrders({ regionId, datasource = 'tranquility', ifNoneMatch, orderType = 'all', page = 1, typeId, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/markets/{region_id}/orders/',
            path: {
                'region_id': regionId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'order_type': orderType,
                'page': page,
                'type_id': typeId,
            },
            errors: {
                304: `Not modified`,
                400: `Bad request`,
                404: `Not found`,
                420: `Error limited`,
                422: `Not found`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * List type IDs relevant to a market
     * Return a list of type IDs that have active orders in the region, for efficient market indexing.
 *
 * ---
 * Alternate route: `/dev/markets/{region_id}/types/`
 *
 * Alternate route: `/legacy/markets/{region_id}/types/`
 *
 * Alternate route: `/v1/markets/{region_id}/types/`
 *
 * ---
 * This route is cached for up to 600 seconds
     * @returns number A list of type IDs
     * @throws ApiError
     */
    getMarketsRegionIdTypes({ regionId, datasource = 'tranquility', ifNoneMatch, page = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/markets/{region_id}/types/',
            path: {
                'region_id': regionId,
            },
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
}
exports.MarketService = MarketService;
//# sourceMappingURL=MarketService.js.map