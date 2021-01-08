const token = localStorage.getItem('token');

export const headersNormal = {
    headers: {
        'Content-Type': 'application/json'
    }
};

export const headersMultipart = {
    headers: {
        'Content-Type': 'multipart/form-data'
    }
}

export const tokenHeadersNormal = () => {
    if (token) {
        headersNormal.headers['x-auth-header'] = token;
    }
    return headersNormal;
};

export const tokenHeadersMultipart = () => {
    if (token) {
        headersMultipart.headers['x-auth-header'] = token;
    }
    return headersMultipart;
};
