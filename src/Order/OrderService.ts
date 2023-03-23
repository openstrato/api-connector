import { BaseService } from "../Common/BaseService";

export interface OrderCreateInterface
{
    cartId: string;
    payments?: OrderPaymentInterface[];
    shippingAddress?: AddressInterface;
}

export interface OrderInterface
{
    id: string;
    cartId: string;
    payments: OrderPaymentInterface[];
    shippingAddress: AddressInterface;
}

export interface OrderPaymentInterface
{
    amount: number;
    currency: string;
    methodType: string;
}

export interface AddressInterface
{
    firstName: string;
    lastName: string;
    line1: string;
    line2: string;
    city: string;
    region: string;
    country: string;
    postalCode: string;
}

export class OrderService extends BaseService<OrderInterface, OrderCreateInterface>
{
    protected baseUrl: string = `${this.params.orderApiUrl}/orders`;
}
