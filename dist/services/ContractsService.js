"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsService = void 0;
class ContractsService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get contracts
     * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/contracts/`
 *
 * Alternate route: `/legacy/characters/{character_id}/contracts/`
 *
 * Alternate route: `/v1/characters/{character_id}/contracts/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of contracts
     * @throws ApiError
     */
    getCharactersCharacterIdContracts({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/contracts/',
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
     * Get contract bids
     * Lists bids on a particular auction contract
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/bids/`
 *
 * Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/bids/`
 *
 * Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/bids/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of bids
     * @throws ApiError
     */
    getCharactersCharacterIdContractsContractIdBids({ characterId, contractId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/contracts/{contract_id}/bids/',
            path: {
                'character_id': characterId,
                'contract_id': contractId,
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
     * Get contract items
     * Lists items of a particular contract
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/items/`
 *
 * Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/items/`
 *
 * Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/items/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of items in this contract
     * @throws ApiError
     */
    getCharactersCharacterIdContractsContractIdItems({ characterId, contractId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/contracts/{contract_id}/items/',
            path: {
                'character_id': characterId,
                'contract_id': contractId,
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
     * Get public contract bids
     * Lists bids on a public auction contract
 *
 * ---
 * Alternate route: `/dev/contracts/public/bids/{contract_id}/`
 *
 * Alternate route: `/legacy/contracts/public/bids/{contract_id}/`
 *
 * Alternate route: `/v1/contracts/public/bids/{contract_id}/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of bids
     * @throws ApiError
     */
    getContractsPublicBidsContractId({ contractId, datasource = 'tranquility', ifNoneMatch, page = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contracts/public/bids/{contract_id}/',
            path: {
                'contract_id': contractId,
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
                403: `Not Authorized to see contract`,
                404: `Not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get public contract items
     * Lists items of a public contract
 *
 * ---
 * Alternate route: `/dev/contracts/public/items/{contract_id}/`
 *
 * Alternate route: `/legacy/contracts/public/items/{contract_id}/`
 *
 * Alternate route: `/v1/contracts/public/items/{contract_id}/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of items in this contract
     * @throws ApiError
     */
    getContractsPublicItemsContractId({ contractId, datasource = 'tranquility', ifNoneMatch, page = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contracts/public/items/{contract_id}/',
            path: {
                'contract_id': contractId,
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
                403: `Not Authorized to see contract`,
                404: `Not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get public contracts
     * Returns a paginated list of all public contracts in the given region
 *
 * ---
 * Alternate route: `/dev/contracts/public/{region_id}/`
 *
 * Alternate route: `/legacy/contracts/public/{region_id}/`
 *
 * Alternate route: `/v1/contracts/public/{region_id}/`
 *
 * ---
 * This route is cached for up to 1800 seconds
     * @returns any A list of contracts
     * @throws ApiError
     */
    getContractsPublicRegionId({ regionId, datasource = 'tranquility', ifNoneMatch, page = 1, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/contracts/public/{region_id}/',
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
                404: `Region not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get corporation contracts
     * Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contracts/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/contracts/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/contracts/`
 *
 * ---
 * This route is cached for up to 300 seconds
     * @returns any A list of contracts
     * @throws ApiError
     */
    getCorporationsCorporationIdContracts({ corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/contracts/',
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
     * Get corporation contract bids
     * Lists bids on a particular auction contract
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/bids/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/bids/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of bids
     * @throws ApiError
     */
    getCorporationsCorporationIdContractsContractIdBids({ contractId, corporationId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/contracts/{contract_id}/bids/',
            path: {
                'contract_id': contractId,
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
                404: `Not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
            },
        });
    }
    /**
     * Get corporation contract items
     * Lists items of a particular contract
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/items/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/items/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/items/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of items in this contract
     * @throws ApiError
     */
    getCorporationsCorporationIdContractsContractIdItems({ contractId, corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/contracts/{contract_id}/items/',
            path: {
                'contract_id': contractId,
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
                404: `Not found`,
                420: `Error limited`,
                500: `Internal server error`,
                503: `Service unavailable`,
                504: `Gateway timeout`,
                520: `Internal error thrown from the EVE server. Most of the time this means you have hit an EVE server rate limit`,
            },
        });
    }
}
exports.ContractsService = ContractsService;
//# sourceMappingURL=ContractsService.js.map