"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InsuranceService = void 0;
class InsuranceService {
    httpRequest;
    constructor(httpRequest) {
        this.httpRequest = httpRequest;
    }
    /**
     * List insurance levels
     * Return available insurance levels for all ship types
 *
 * ---
 * Alternate route: `/dev/insurance/prices/`
 *
 * Alternate route: `/legacy/insurance/prices/`
 *
 * Alternate route: `/v1/insurance/prices/`
 *
 * ---
 * This route is cached for up to 3600 seconds
     * @returns any A list of insurance levels for all ship types
     * @throws ApiError
     */
    getInsurancePrices({ acceptLanguage = 'en', datasource = 'tranquility', ifNoneMatch, language = 'en', }) {
        return this.httpRequest.request({
            method: 'GET',
            url: '/insurance/prices/',
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
}
exports.InsuranceService = InsuranceService;
//# sourceMappingURL=InsuranceService.js.map