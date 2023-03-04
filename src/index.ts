import HttpClient from "./Common/HttpClient";
import ProductFetcher from "./Product/ProductFetcher";

interface ParamsInterface
{
    productApiUrl: string
}

export function apiConnector(params)
{
    const httpClient = new HttpClient();

    const productFetcher = new ProductFetcher(httpClient, params.productApiUrl);

    const connector = {
        product: productFetcher,
    }

    return connector;
}
