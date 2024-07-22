import axios from 'axios';
import { serverUrl } from '../configs/ServerInfo';

const baseUrl = `${serverUrl}`;
// const baseUrl = `${serverUrl}/${apiVersion}`;

const onSuccCode = [200, 201];

export type APICallback = (arg0: any) => void;
export type APICallResp = any;

/**
 * Handle response from server
 * @param res
 * @param onSucc
 * @param onFail
 */
const handleResult = (res: any, onSucc: APICallback, onFail: APICallback) => {
    if (onSuccCode.includes(res.status)) {
        onSucc(res.data);
    } else {
        onFail(res);
    }
};

/**
 * Make POST request and return a promise
 */
export const postRequestAsync = (data: any, route: string): Promise<any> => {
    const requestUrl = `${baseUrl}/${route}`;
    return axios.post(requestUrl, data);
};


/**
 * Make GET request and return a promise
 */
export const getRequestAsync = (route: string): Promise<any> => {
    const requestUrl = `${baseUrl}/${route}`;
    return axios.get(requestUrl);
};

