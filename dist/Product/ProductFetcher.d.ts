import HttpClient from "../Common/HttpClient";
interface ProductInterface {
    name: string;
}
export default class ProductFetcher {
    private httpClient;
    private productApiUrl;
    constructor(httpClient: HttpClient, productApiUrl: string);
    getProducts: () => Promise<ProductInterface[]>;
}
export {};
