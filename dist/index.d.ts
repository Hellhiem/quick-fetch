import { AxiosRequestConfig, AxiosResponse, Method, AxiosError } from 'axios';
/**
 * HTTP client built at the top of axios library to reduce your boilerplate.
 * It returns response.data or throws error.
 *
 * TypeScript generics allows to properly type response and error type
 * if generic types are not provided it falls back to default
 * AxiosResponse or AxiosError depending on request result.
 *
 * @param method - Axios method type (POST,GET, etc...)
 * @param endpoint
 * @param config Axios request configs
 * @returns response.data from api request or throws error
 */
export declare const quickFetch: <ResponseType = AxiosResponse<any, any>, ResponseErrorType = AxiosError<unknown, any>>(method: Method, endpoint: string, config?: AxiosRequestConfig | undefined) => Promise<ResponseType>;
