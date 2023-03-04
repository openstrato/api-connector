import HttpClient from "./Common/HttpClient";
import ProductFetcher from "./Product/ProductFetcher";

export function apiConnector()
{
    const httpClient = new HttpClient();

    const productFetcher = new ProductFetcher(httpClient);

    const connector = {
        product: productFetcher,
    }

    return connector;
}
