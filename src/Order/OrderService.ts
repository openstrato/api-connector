import { BaseService } from "../Common/BaseService";

export interface OrderInterface
{
    id: string;
}

export class OrderService extends BaseService<OrderInterface>
{
    protected baseUrl: string = `${this.params.orderApiUrl}/orders`;
}
