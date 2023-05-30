"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoyaltyService = void 0;
class LoyaltyService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get loyalty points
     * Return a list of loyalty points for all corporations the character has worked for
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/loyalty/points/`
 *
 * Alternate route: `/legacy/characters/{character_id}/loyalty/points/`
 *
 * Alternate route: `/v1/characters/{character_id}/loyalty/points/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of loyalty points
     * @throws ApiError
     */
    getCharactersCharacterIdLoyaltyPoints({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/loyalty/points/',
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
     * List loyalty store offers
     * Return a list of offers from a specific corporation's loyalty store
 *
 * ---
 * Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/`
 *
 * Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/`
 *
 * Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/`
 *
 * ---
 * This route expires daily at 11:05
     * @returns any A list of offers
     * @throws ApiError
     */
    getLoyaltyStoresCorporationIdOffers({ corporationId, datasource = 'tranquility', ifNoneMatch, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/loyalty/stores/{corporation_id}/offers/',
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
                404: `No loyalty point store found for the provided corporation`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
}
exports.LoyaltyService = LoyaltyService;
//# sourceMappingURL=LoyaltyService.js.map