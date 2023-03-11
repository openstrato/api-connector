"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const BaseService_1 = require("../Common/BaseService");
class OrderService extends BaseService_1.BaseService {
    constructor() {
        super(...arguments);
        this.baseUrl = `${this.params.orderApiUrl}/orders`;
    }
}
exports.OrderService = OrderService;
