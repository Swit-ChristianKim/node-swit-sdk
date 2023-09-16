import {Agent as HttpAgent} from "http";
import {Agent as HttpsAgent} from "https";

export interface ApiClientConfig {
    token: string;
    url?: string;
    // logger?: Logger;
    // logLevel?: LogLevel;
    maxRequestConcurrency?: number;
    // retryConfig?: RetryOptions;
    httpAgent?: HttpAgent;
    httpsAgent?: HttpsAgent;
    // tls?: TLSOptions;
    timeout?: number;
    // rejectRateLimitedCalls?: boolean;
    headers?: Record<string, string> | { Authorization?: string; 'User-Agent': string };
}
