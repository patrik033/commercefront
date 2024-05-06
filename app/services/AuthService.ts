import Cookies from 'js-cookie';
import { cookies } from 'next/headers';

export const AuthService = () => {
    const register = async (userData) => {
        try {
            const res = await fetch('https://localhost:5001/api/identity/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
            if (!res.ok) {
                throw new Error('Registration failed');
            }
            const data = await res.json();
            return data;
        } catch (error) {
            throw new Error('Registration failed');
        }
    };

    const login = async (username, password) => {
        try {
            const res = await fetch('https://localhost:5001/api/identity/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const { result } = await res.json();
            // console.log({ result });
            console.log(result.accessToken)
            console.log(result.refreshToken)
            // Save the tokens in secure HTTPOnly cookies
            // Cookies.set('accessToken', result.accessToken, { secure: true, httpOnly: true });
            // Cookies.set('refreshToken', result.refreshToken, { secure: true, httpOnly: true });
            Cookies.set('accessToken', result.accessToken);
            Cookies.set('refreshToken', result.refreshToken);



            console.log()
            return result;
        } catch (error) {
            throw new Error('Login failed');
        }
    };

    const logout = () => {
        // Remove the accessToken cookie
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
    };

    const refreshToken = async () => {
        try {
            const refreshToken = Cookies.get('refreshToken');
            const res = await fetch('/api/auth/refresh-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });
            const data = await res.json();
            // Update the access token cookie with the new access token
            Cookies.set('accessToken', data.accessToken, { secure: true, httpOnly: true });
            return data;
        } catch (error) {
            throw new Error('Token refresh failed');
        }
    };

    const isAccessTokenExpired = () => {
        const accessToken = Cookies.get('accessToken');
        // Implement logic to check if the access token is expired
        // You can use libraries like `jsonwebtoken` to decode and verify the token
        // If the token is expired, return true; otherwise, return false
    };

    return { register, login, logout };
};