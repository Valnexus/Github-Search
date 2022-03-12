import axios from "axios";

export async function apiCall(url: string, method: any, query: {}) {
    return await axios({
            url: url,
            method: method,
            data: query
        })
        .then((res)=> res.data)
        .catch((error) => console.error(error));
}

export async function apiGitHub(url:string, method: any, token: string, query:{}) {
    return await axios({
            url: url,
            method: method,
            headers: {
                'Authorization': 'bearer ' + token,
            }
        })
        .then((res)=> res.data)
        .catch((error) => console.error(error));
}               