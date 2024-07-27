import React, { useState } from 'react';
import logo from "../assets/logo.png";
import searchImg from "../assets/search.png";
import styles from "./navBar.module.css";

function NavBar() {
    const [search, setSearch] = useState("");

    const onChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className={styles.container}>
            <a className={styles.logo} href=""><img src={logo} alt="" /></a>
            <div className={styles.innerContainer}>
                <ul className={styles.menuContainer}>
                    <li><a href="">교내 첼린지</a></li>
                    <li><a href="">이달의 대항전 기록</a></li>
                    <li><a href="">전체 첼린지</a></li>
                    <li><a href="">공지사항</a></li>
                </ul>
                <div>
                    <div className={styles.searchContainer}>
                        <input type="text" value={search} onChange={onChange}/>
                        <button><img src={searchImg} alt="" /></button>
                    </div>
                    <a href="">로그인</a>
                    <button>
                        <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0V4H40V0H0ZM0 12V16H40V12H0ZM0 24V28H40V24H0Z" fill="#666666"/>
                        </svg>
                    </button>
                </div>

            </div>
        </div>

    )
}

export default NavBar;