import axios, { AxiosResponse } from 'axios'
import { URL, URLSearchParams } from 'url';

export default class HttpClient
{
    async get(url: string, params, headers = {})
    {
        const response: AxiosResponse = await axios.get(url, {
            params: params,
            headers: headers,
        })

        return response.data;
    }

    async post(url: string, data, headers = {})
    {
        const bodyData: URLSearchParams = new URLSearchParams(data);
        const response: AxiosResponse = await axios.post(url, bodyData.toString(), {
            headers: headers,
        })
        return response.data;
    }

    generateUrl(url: string, params): string
    {
        const queryParams: URLSearchParams = new URLSearchParams(params);
        const urlInstance = new URL(url);
        urlInstance.search = queryParams.toString();
        return urlInstance.toString();
    }
}
