import { BaseService } from "../Common/BaseService";
export interface CartInterface {
    id: string;
}
export declare class CartService extends BaseService<CartInterface> {
    protected baseUrl: string;
}
