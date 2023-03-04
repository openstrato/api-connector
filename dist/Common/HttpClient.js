"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const url_1 = require("url");
class HttpClient {
    get(url, params, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(url, {
                params: params,
                headers: headers,
            });
            return response.data;
        });
    }
    post(url, data, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const bodyData = new url_1.URLSearchParams(data);
            const response = yield axios_1.default.post(url, bodyData.toString(), {
                headers: headers,
            });
            return response.data;
        });
    }
    generateUrl(url, params) {
        const queryParams = new url_1.URLSearchParams(params);
        const urlInstance = new url_1.URL(url);
        urlInstance.search = queryParams.toString();
        return urlInstance.toString();
    }
}
exports.default = HttpClient;
