import HttpClient from "../Common/HttpClient";

interface ProductInterface
{
    name: string,
}

export default class ProductFetcher
{
    constructor(
       private httpClient: HttpClient,
       private productApiUrl: string,
    ) {}

    getProducts = async(): Promise<ProductInterface[]> =>
    {
        const products = await this.httpClient.get(
            `${this.productApiUrl}/products`,
            {},
        )

        return products;
    }
}
