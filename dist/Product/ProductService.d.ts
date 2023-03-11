import { BaseService } from "../Common/BaseService";
export interface ProductInterface {
    name: string;
}
export declare class ProductService extends BaseService<ProductInterface> {
    protected baseUrl: string;
}
