import * as data from "../config.json";

export const client = (endpoint, { body, ...customConfig } = {}) => {
    const headers = {};
    const config = {
        method: body ? "POST" : "GET",
        ...customConfig,
        headers: {
            ...headers,
            ...customConfig.headers,
        },
    };
    if (body) {
        config.body = JSON.stringify(body);
    }
    return window
        .fetch(`${data.api.url}/${endpoint}`, config)
        .then(async(response) => {
            if (response.ok) {
                if (response.headers.get("content-type") != null) {
                    return await response.json();
                }
            } else {
                const errorMessage = await response.text();
                return Promise.reject(new Error(errorMessage));
            }
        });
};