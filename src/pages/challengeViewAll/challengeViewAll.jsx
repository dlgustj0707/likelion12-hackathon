import React from 'react'
import NavBar from '../../component/navBar/navBar';
import styles from './challegeViewAll.module.css';

function ChallengeViewAll() {
    return (
        <>
        <NavBar></NavBar>
        <div className={styles.subtitle}>
            <p>교내 첼린지<br />전체 보기</p>
        </div>
        </>
    )
}

export default ChallengeViewAll