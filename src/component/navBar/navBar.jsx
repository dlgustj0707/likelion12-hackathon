import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logo from "../../assets/logo.png";
import searchImg from "../../assets/search.png";
import styles from "./navBar.module.css";

function NavBar() {
    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className={styles.container}>
            <a className={styles.logo} href="/"><img src={logo} alt="" /></a>
            <div className={styles.innerContainer}>
                <ul className={styles.menuContainer}>
                    <li><a href="/challengeView">교내 챌린지</a></li>
                    <li><a href="">이달의 대항전 기록</a></li>
                    <li><a href="">전체 챌린지</a></li>
                    <li><a href="/announcement">공지사항</a></li>
                </ul>
                <div>
                    <div className={styles.searchContainer}>
                        <input type="text" />
                        <button><img src={searchImg} alt="" /></button>
                    </div>
                    {isLoggedIn ? (
                        <button className={styles.logoutBtn} onClick={handleLogout}>로그아웃</button>
                    ) : (
                        <a href="/login">로그인</a>
                    )}
                    <button className={styles.menuBtn} onClick={toggleMenu}>
                        <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0V4H40V0H0ZM0 12V16H40V12H0ZM0 24V28H40V24H0Z" fill="#666666"/>
                        </svg>
                    </button>
                    {isOpen ? (
                        <ul className={styles.menuBar}>
                            <li><a href="/mypage">마이 페이지</a></li>
                            <li><a href="">교내 챌린지</a></li>
                            <li><a href="">전체 챌린지</a></li>
                            <li><a href="">이달의 대항전</a></li>
                            <li><a href="/announcement">공지사항</a></li>
                        </ul>
                    ) : (null)
                    }
                </div>
            </div>
        </div>
    );
}

export default NavBar;
