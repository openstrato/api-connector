import { CartService } from "./Cart/CartService";
import HttpClient from "./Common/HttpClient";
import { OrderService } from "./Order/OrderService";
import {ProductService} from "./Product/ProductService";

export interface ApiParamsInterface
{
    lang: string,
    productApiUrl: string,
    cartApiUrl: string,
    orderApiUrl: string,
    extensionApiUrl: string,
}

export function apiConnector(params: ApiParamsInterface)
{
    const httpClient = new HttpClient();

    const productService = new ProductService(params, httpClient);
    const cartService = new CartService(params, httpClient);
    const orderService = new OrderService(params, httpClient);

    const connector = {
        products: productService,
        carts: cartService,
        orders: orderService,
    }

    return connector;
}


