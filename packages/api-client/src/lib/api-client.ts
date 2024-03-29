import axios, { AxiosInstance } from 'axios';
import { OAUTH_URL, OPEN_API_V1_URL } from './api-client.costants';
import { userAgent } from './user-agent';
import pino from 'pino';
import { ApiClientConfig } from './api-client.model';
import { ClientV1 } from './v1';
import isElectron from 'is-electron';
import { EventEmitter } from 'node:events';
import { OauthClient } from './v1/OauthClient';



export class ApiClient extends EventEmitter {
  private logger = pino();
  public v1: ClientV1;
  public clientV1AxiosRef: AxiosInstance;
  public oauth: OauthClient;
  public oauthAxiosRef: AxiosInstance;

  constructor(config: ApiClientConfig) {
    super();
    this.clientV1AxiosRef = this.createAxiosInstance(OPEN_API_V1_URL,config);
    this.v1 = this.createClient(this.clientV1AxiosRef);
    this.oauthAxiosRef = this.createAxiosInstance(OAUTH_URL,config);
    this.oauth = this.createOauthClient(this.oauthAxiosRef);
  }


  private createAxiosInstance(
    baseURL: string,
    config: ApiClientConfig) {
    const headers = config?.headers ?? {};
    const timeout = config?.timeout ?? 0;
    const httpAgent = config?.httpAgent;
    const httpsAgent = config?.httpsAgent;

    if (config.token && !config?.headers?.Authorization) {
      headers.Authorization = `Bearer ${config.token}`;
      this.logger.debug('header: Authorization', headers.Authorization);
    }
    if (!isElectron()) {
      headers['User-Agent'] = userAgent();
    }
    return axios.create({
      baseURL,
      maxRedirects: 0,
      timeout,
      headers,
      httpAgent,
      httpsAgent
    });
  }

  private createClient(instance: AxiosInstance) {
    return ClientV1.createInstance({
      BASE: OPEN_API_V1_URL,
      VERSION: '1.0.0',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include'
    }, instance);
  }

  private createOauthClient(instance: AxiosInstance){
    return OauthClient.createInstance({
      BASE: OAUTH_URL,
      VERSION: '1.0.0',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include'
    }, instance)
  }
}


