export const api = (() => {
    const BASE_URL = 'https://forum-api.dicoding.dev/v1'

    async function _fetchWithAuth(url: string, options: {
        headers?: object,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        body?: string
    } = {headers: {}, method: 'GET'}) {
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                Authorization: `Bearer ${getAccessToken()}`
            }
        })
    }

    function getAccessToken() {
        return localStorage.getItem('accessToken')
    }

    function putAccessToken(accessToken: string) {
        localStorage.setItem('accessToken', accessToken)
    }

    async function login({email, password}: {email: string, password: string}) {
        const response = await fetch(
            `${BASE_URL}/login`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            }
        )
        const {status, message, data} = await response.json()
        if (status !== 'success') {
            throw new Error(message)
        }
        return {error: false, data}
    }

    async function register({name, email, password}: {name: string, email: string, password: string}) {
        const response = await fetch(
            `${BASE_URL}/register`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, email, password})
            }
        )
        const {status, message, data} = await response.json()
        if (status !== 'success') {
            throw new Error(message)
        }
        return {error: false, data}
    }

    async function getUsers() {
        const response = await fetch(`${BASE_URL}/users`)
        const {status, data} = await response.json()
        if (status !== 'success') {
            return {error: true, data: null}
        }
        return {error: false, data}
    }

    async function getMyProfile() {
        const response = await _fetchWithAuth(`${BASE_URL}/users/me`)
        const {status, message, data} = await response.json()
        if (status !== 'success') {
            throw new Error(message)
        }
        return {error: false, data}
    }

    return {
        getAccessToken,
        putAccessToken,
        login,
        register,
        getUsers,
        getMyProfile
    }
})()
