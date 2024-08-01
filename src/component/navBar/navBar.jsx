import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/logo.png";
import searchImg from "../../assets/search.png";
import styles from "./navBar.module.css";

function NavBar({ isLoggedIn, onLogout }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <a className={styles.logo} href="/main"><img src={logo} alt="" /></a>
            <div className={styles.innerContainer}>
                <ul className={styles.menuContainer}>
                    <li><a href="">교내 챌린지</a></li>
                    <li><a href="">이달의 대항전 기록</a></li>
                    <li><a href="">전체 챌린지</a></li>
                    <li><a href="">공지사항</a></li>
                </ul>
                <div>
                    <div className={styles.searchContainer}>
                        <input type="text" />
                        <button><img src={searchImg} alt="" /></button>
                    </div>
                    {isLoggedIn ? (
                        <button onClick={handleLogout}>로그아웃</button>
                    ) : (
                        <a href="/login">로그인</a>
                    )}
                    <button>
                        <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V4H40V0H0ZM0 12V16H40V12H0ZM0 24V28H40V24H0Z" fill="#666666"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
