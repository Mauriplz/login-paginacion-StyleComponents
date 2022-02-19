import { stringify } from 'query-string';

const responseHandler = async (response) => {
    const res = await response.json();
    if(!response.ok){
        throw res.error;
    }else{
        return res;
    }
}

export const getFetch = async (endpoint, params) => {
    const baseUrl = 'https://reqres.in/api';
    const url = `${baseUrl}/${endpoint}/${params ? `?${stringify(params)}` : ''}`;
    const resp = await fetch(url, { method: 'GET' });
    return await responseHandler(resp);
}

export const postFetch = async (endpoint, body) => {
    const baseUrl = 'https://reqres.in/api';
    const url = `${baseUrl}/${endpoint}`;
    const resp = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
    return await responseHandler(resp);
}