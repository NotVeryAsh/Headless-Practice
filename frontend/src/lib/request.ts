export default async function makeRequest (url: string, method: string, body?: any) {

    return request(url, method, body);
}

async function request (url: string, method: string, body?: any, csrf: boolean = true) {

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Request-Headers': 'x-requested-with,x-xsrf-token'
    }

    if(csrf) {
        headers['X-Xsrf-Token'] = getCSRFToken();
        headers['X-Requested-With'] = 'XMLHttpRequest';
    }

    // append the base url to url
    url = process.env.NEXT_PUBLIC_BACKEND_URL + url;

    if(method === 'GET') {
        url += '?';
        for(let key in body) {
            url += `&${key}=${body[key]}`;
        }

        body = null;
    }

    const response = await fetch(url, {
        method,
        headers: headers,
        credentials: 'include',
        body: body && JSON.stringify(body),
    });

    if(response.status === 204) {
        return response;
    }

    return response.json()
}

function getCSRFToken () {

    const token = decodeURIComponent(document.cookie
        .split('; ')
        .find(row => row.startsWith('XSRF-TOKEN='))
        .split('=')[1]);

    if(token) {
        return token;
    }

    request('/sanctum/csrf-cookie', 'GET', null, false).then(() => {
        return getCSRFToken();
    });
}
