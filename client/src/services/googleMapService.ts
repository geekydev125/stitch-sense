import baseUrl from "../config/base-url";

export const getKey = fetch(`${baseUrl}/google-map`, {
    method: 'GET',
})
