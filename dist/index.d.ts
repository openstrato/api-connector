import { CartService } from "./Cart/CartService";
import { OrderService } from "./Order/OrderService";
import { ProductService } from "./Product/ProductService";
export interface ApiParamsInterface {
    lang: string;
    currency: string;
    productApiUrl: string;
    cartApiUrl: string;
    orderApiUrl: string;
    extensionApiUrl: string;
}
export declare function apiConnector(params: ApiParamsInterface): {
    products: ProductService;
    carts: CartService;
    orders: OrderService;
};
