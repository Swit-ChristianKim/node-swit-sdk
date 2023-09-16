import axios, {AxiosInstance, AxiosResponse, Method} from "axios";
import {BASE_URL} from "./api-client.costants";
import {userAgent} from "./user-agent";
import pino from "pino";
import {ApiClientConfig} from "./api-client.model";
import isElectron = require("is-electron");


export class ApiClient {
    private instance: AxiosInstance;
    private logger = pino();
    public readonly token: string;

    constructor(config: ApiClientConfig) {
        const headers = config?.headers ?? {};
        const timeout = config?.timeout ?? 0;
        const httpAgent = config?.httpAgent;
        const httpsAgent = config?.httpsAgent;
        this.token = config?.token;

        if (config.token && !config?.headers?.Authorization) {
            headers.Authorization = `Bearer ${config.token}`
            this.logger.debug('header: Authorization', headers.Authorization);
        }
        if (!isElectron()) {
            headers['User-Agent'] = userAgent();
        }

        this.instance = axios.create({
            baseURL: BASE_URL,
            // transformRequest: [this.transformRequest],
            maxRedirects: 0,
            timeout,
            headers,
            httpAgent,
            httpsAgent,
        });
    }

    public request<T, R>(url: string, method?: Method | string, data?: T) {
        return this.instance.request<R, AxiosResponse<R>, T>({
            url,
            method,
            data,
        });
    }

    public get<T, R>(url: string, params: T) {
        return this.instance.get<R, AxiosResponse<R>>(url, {params});
    }

    public post<T, R>(url: string, data: T) {
        return this.instance.post<R, AxiosResponse<R>, T>(url, data);
    }

    private transformRequest() {
    }

}


