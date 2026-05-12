"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiConnector = void 0;
const CartService_1 = require("./Cart/CartService");
const HttpClient_1 = require("./Common/HttpClient");
const OrderService_1 = require("./Order/OrderService");
const ProductService_1 = require("./Product/ProductService");
function apiConnector(params) {
    const httpClient = new HttpClient_1.default();
    const productService = new ProductService_1.ProductService(params, httpClient);
    const cartService = new CartService_1.CartService(params, httpClient);
    const orderService = new OrderService_1.OrderService(params, httpClient);
    // - handle payment methods
    // - ability to add a payment (other than stripe)
    const connector = {
        products: productService,
        carts: cartService,
        orders: orderService,
    };
    return connector;
}
exports.apiConnector = apiConnector;
