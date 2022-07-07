# quick-fetch

HTTP client built at the top of [axios](https://github.com/axios/axios) library to reduce your boilerplate in friendly way.

`quickFetch` already return `data` from response or throws error.

When using `TypeScript` you can get use of `Generics` to pass down your own `ResponseType` and `ErrorType` that are returned by API.

# Installation

Using npm:

```bash
npm install @hellhiem/quick-fetch
```

Using yarn:

```bash
yarn add @hellhiem/quick-fetch
```

# Example

## **JavaScript**

```js
quickFetch(Method, Endpoint, Config)
```

**`Params:`**
| Param | Type | Description |
| :--- | :---: | ----------: |
| Method | [Method](https://github.com/axios/axios#request-method-aliases) | Axios method type (POST,GET, etc...) |
| Endpoint | `string` | ... |
| Config (**Optional**) | [AxiosRequestConfig](https://github.com/axios/axios#request-config) | Axios request configs |

```js
/// Simple fetch without configs
quickFetch('GET', 'https://api.example/v1/movies')

// Simple fetch with optional configs
quickFetch('GET', 'https://api.example/v1/movies', 
    { 
        headers: {...yourHeaders },
        ...otherConfigs
    }
)
```

## **TypeScript**

```ts
quickFetch<ResponseType, ErrorType>(Method, Endpoint, Config)
```

**`Params:`**
| Param | Type | Description |
| :--- | :---: | ----------: |
| Method | [Method](https://github.com/axios/axios#request-method-aliases) | Axios method type (POST,GET, etc...) |
| Endpoint | `string` | ... |
| Config (**Optional**) | [AxiosRequestConfig](https://github.com/axios/axios#request-config) | Axios request configs |

**`Generics:`**
| Generics | DefaultType | Description |
| :------- | :---------: | ----------: |
| ResponseType | [AxiosResponse](https://github.com/axios/axios/blob/v1.x/index.d.ts#L267) | Response type returned by `response.data`. When type is not provided is falls back to `AxiosResponse` type. |
| ResponseErrorType | [AxiosError](https://github.com/axios/axios/blob/v1.x/index.d.ts#L276) | Response error type threw by `error`. When type is not provided is falls back to `AxiosError` type. |

```ts
// Example types
type Movie = {
    id: number;
    name: string;
}

type MoviesResponseType = {
    page: number;
    perPage: number;
    maxPage: number;
    data: Movie[];
}

type ResponseErrorType = {
    code: number;
    text: string;
}

/// Simple fetch without configs
quickFetch<MoviesResponseType, ResponseErrorType>('GET', 'https://api.example/v1/movies')

// Simple fetch with optional configs
quickFetch<MoviesResponseType, ResponseErrorType>('GET', 'https://api.example/v1/movies', 
    { 
        headers: {...yourHeaders },
        ...otherConfigs
    }
)
```
