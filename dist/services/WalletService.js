"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletService = void 0;
class WalletService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * Get a character's wallet balance
     * Returns a character's wallet balance
 *
 * ---
 * Alternate route: `/legacy/characters/{character_id}/wallet/`
 *
 * Alternate route: `/v1/characters/{character_id}/wallet/`
 *
 * ---
 * This route is cached for up to 120 seconds
 *
 * ---
 * [Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/wallet/)
     * @returns number Wallet balance
     * @throws ApiError
     */
    getCharactersCharacterIdWallet({ characterId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/wallet/',
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
     * Get character wallet journal
     * Retrieve the given character's wallet journal going 30 days back
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/wallet/journal/`
 *
 * Alternate route: `/v6/characters/{character_id}/wallet/journal/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Journal entries
     * @throws ApiError
     */
    getCharactersCharacterIdWalletJournal({ characterId, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/wallet/journal/',
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
     * Get wallet transactions
     * Get wallet transactions of a character
 *
 * ---
 * Alternate route: `/dev/characters/{character_id}/wallet/transactions/`
 *
 * Alternate route: `/legacy/characters/{character_id}/wallet/transactions/`
 *
 * Alternate route: `/v1/characters/{character_id}/wallet/transactions/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any Wallet transactions
     * @throws ApiError
     */
    getCharactersCharacterIdWalletTransactions({ characterId, datasource = 'tranquility', fromId, ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/characters/{character_id}/wallet/transactions/',
            path: {
                'character_id': characterId,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'from_id': fromId,
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
     * Returns a corporation's wallet balance
     * Get a corporation's wallets
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/wallets/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/wallets/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/wallets/`
 *
 * ---
 * This route is cached for up to 300 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
 *
     * @returns any List of corporation wallets
     * @throws ApiError
     */
    getCorporationsCorporationIdWallets({ corporationId, datasource = 'tranquility', ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/wallets/',
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
    /**
     * Get corporation wallet journal
     * Retrieve the given corporation's wallet journal for the given division going 30 days back
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/journal/`
 *
 * Alternate route: `/v4/corporations/{corporation_id}/wallets/{division}/journal/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
 *
     * @returns any Journal entries
     * @throws ApiError
     */
    getCorporationsCorporationIdWalletsDivisionJournal({ corporationId, division, datasource = 'tranquility', ifNoneMatch, page = 1, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/wallets/{division}/journal/',
            path: {
                'corporation_id': corporationId,
                'division': division,
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
     * Get corporation wallet transactions
     * Get wallet transactions of a corporation
 *
 * ---
 * Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/transactions/`
 *
 * Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/transactions/`
 *
 * Alternate route: `/v1/corporations/{corporation_id}/wallets/{division}/transactions/`
 *
 * ---
 * This route is cached for up to 3600 seconds
 *
 * ---
 * Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant
 *
     * @returns any Wallet transactions
     * @throws ApiError
     */
    getCorporationsCorporationIdWalletsDivisionTransactions({ corporationId, division, datasource = 'tranquility', fromId, ifNoneMatch, token, }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/corporations/{corporation_id}/wallets/{division}/transactions/',
            path: {
                'corporation_id': corporationId,
                'division': division,
            },
            headers: {
                'If-None-Match': ifNoneMatch,
            },
            query: {
                'datasource': datasource,
                'from_id': fromId,
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
exports.WalletService = WalletService;
//# sourceMappingURL=WalletService.js.map