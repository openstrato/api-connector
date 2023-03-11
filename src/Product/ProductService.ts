import { BaseService } from "../Common/BaseService";

export interface ProductInterface
{
    name: string
}

export class ProductService extends BaseService<ProductInterface>
{
    protected baseUrl: string = `${this.params.productApiUrl}/products`
}
