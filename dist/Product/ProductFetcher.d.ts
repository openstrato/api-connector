import HttpClient from "../Common/HttpClient";
interface ProductInterface {
    name: string;
}
export default class ProductFetcher {
    private httpClient;
    constructor(httpClient: HttpClient);
    getProducts: () => Promise<ProductInterface[]>;
}
export {};
