import React, { useState, useContext, useEffect, useCallback } from 'react';
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

    /* 헤더 숨기기 기능 구현 (시작) */
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const delta = 5; 

    const handleScroll = useCallback(() => {
        const st = window.scrollY || document.documentElement.scrollTop;

        if (Math.abs(lastScrollTop - st) <= delta) {
        return;
        }

        if (st > lastScrollTop && st > 40) { // 헤더 높이 정도로 조정
        setIsHidden(true);
        } else {
        setIsHidden(false);
        }

        setLastScrollTop(st);
    }, [lastScrollTop]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]); 
    /* 헤더 숨기기 기능 구현 (끝) */

    return (
        <div className={`${styles.container} ${isHidden ? styles.hidden : ''}`}>
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
