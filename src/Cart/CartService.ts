import { BaseService } from "../Common/BaseService";

export interface CartInterface
{
    id: string;
}

export class CartService extends BaseService<CartInterface>
{
    protected baseUrl: string = `${this.params.cartApiUrl}/carts`;
}
