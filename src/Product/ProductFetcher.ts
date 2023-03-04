import HttpClient from "../Common/HttpClient";

interface ProductInterface
{
    name: string,
}

export default class ProductFetcher
{
    constructor(
       private httpClient: HttpClient
    ) {}

    getProducts = async(): Promise<ProductInterface[]> =>
    {
        const products = await this.httpClient.get(
            'http://product_api:3001/products',
            {},
        )

        return products;
    }
}
