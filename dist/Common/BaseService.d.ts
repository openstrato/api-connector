import { ApiParamsInterface } from "..";
import HttpClient from "./HttpClient";
export declare class BaseService<T> {
    protected params: ApiParamsInterface;
    protected httpClient: HttpClient;
    protected baseUrl: string;
    protected requestParams: any;
    constructor(params: ApiParamsInterface, httpClient: HttpClient);
    find: () => Promise<T[]>;
    findById: (entityId: string) => Promise<T>;
}
