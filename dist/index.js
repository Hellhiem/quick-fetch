import axios from 'axios';
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
export const quickFetch = async (method, endpoint, config) => {
    return await axios({
        method: method,
        url: endpoint,
        ...config,
    })
        .then((response) => response.data)
        .catch((error) => {
        throw error;
    });
};
console.log('err');
