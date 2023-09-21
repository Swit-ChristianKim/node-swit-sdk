import axios, { AxiosInstance } from 'axios';
import { OPEN_API_V1_URL } from './api-client.costants';
import { userAgent } from './user-agent';
import pino from 'pino';
import { ApiClientConfig } from './api-client.model';
import { ClientV1 } from './v1';
import isElectron = require('is-electron');
import { EventEmitter } from 'node:events';


export class ApiClient extends EventEmitter {
  private logger = pino();
  public v1: ClientV1;

  constructor(config: ApiClientConfig) {
    super();
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

    const instance = axios.create({
      baseURL: OPEN_API_V1_URL,
      maxRedirects: 0,
      timeout,
      headers,
      httpAgent,
      httpsAgent
    });
    this.v1 = this.createClient(instance);
  }


  createClient(instance: AxiosInstance) {
    return ClientV1.createInstance({
      BASE: OPEN_API_V1_URL,
      VERSION: '1.0.0',
      WITH_CREDENTIALS: false,
      CREDENTIALS: 'include'
    }, instance);
  }
}


