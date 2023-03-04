"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiConnector = void 0;
const HttpClient_1 = require("./Common/HttpClient");
const ProductFetcher_1 = require("./Product/ProductFetcher");
function apiConnector() {
    const httpClient = new HttpClient_1.default();
    const productFetcher = new ProductFetcher_1.default(httpClient);
    const connector = {
        product: productFetcher,
    };
    return connector;
}
exports.apiConnector = apiConnector;
