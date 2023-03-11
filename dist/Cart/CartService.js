"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const BaseService_1 = require("../Common/BaseService");
class CartService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.cartApiUrl}/carts`;
    }
}
exports.CartService = CartService;
