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
        <ul>
            <li><a href="">교내 첼린지</a></li>
            <li><a href="">이달의 대항전 기록</a></li>
            <li><a href="">전체 첼린지</a></li>
            <li><a href="">공지사항</a></li>
        </ul>
        <input type="text" value={search} onChange={onChange}/>
        <button><img src={searchImg} alt="" /></button>
        </div>
    )
}

export default NavBar;