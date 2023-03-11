import { ApiParamsInterface } from "..";
import HttpClient from "./HttpClient";

export class BaseService<T>
{
    protected baseUrl = '';

    protected requestParams: any = {
        lang: this.params.lang
    }

    constructor(
        protected params: ApiParamsInterface,
        protected httpClient: HttpClient
    ) {}

    find = async(): Promise<T[]> => {
        const entities = await this.httpClient.get(
            this.baseUrl,
            this.requestParams,
            {}
        )

        return entities;
    }

    findById = async(entityId: string): Promise<T> => {
        const entity = await this.httpClient.get(
            `${this.baseUrl}/${entityId}`,
            this.requestParams,
            {}
        )

        return entity;
    }
}
