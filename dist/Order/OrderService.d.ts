import { BaseService } from "../Common/BaseService";
export interface OrderInterface {
    id: string;
}
export declare class OrderService extends BaseService<OrderInterface> {
    protected baseUrl: string;
}
