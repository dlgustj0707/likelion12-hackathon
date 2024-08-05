// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };

    const logout = async () => {
        try {
            const response = await axios.get('http://beancp.com:8082/user/logout', {
                withCredentials: true,
            });
            if (response.status === 200) {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error('잘못된 접근입니다.');
            } else {
                console.error('로그아웃 실패:', error);
            }
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
