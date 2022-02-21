import { stringify } from 'query-string';

//Funcion para devolver un objeto JSON del resultado sino lanza un error
const responseHandler = async (response) => {
    const res = await response.json();
    if(!response.ok){
        throw res.error;
    }else{
        return res;
    }
}

//Funcion para hacer peticiones GET y pasarle los params(object) por url 
//(Se podria pasar tambien el endpoint como parametro para hacerlo mas dinamico pero en este caso no es necesario)
export const getFetch = async (endpoint, params) => {
    const baseUrl = 'https://reqres.in/api';
    const url = `${baseUrl}/${endpoint}/${params ? `?${stringify(params)}` : ''}`;
    const resp = await fetch(url, { method: 'GET' });
    return await responseHandler(resp);
}

//Funcion para hacer peticion POST y pasarle un body(Object) a la peticion
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