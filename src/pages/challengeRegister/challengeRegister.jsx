import React from 'react'
import NavBar from '../../component/navBar';
import styles from './challengeRegister.module.css';

function ChallengeRegister() {
    return (
    <>
    <NavBar></NavBar>
    <div className={styles.subtitle}>
        <p>챌린지 추가하기</p>
    </div>

    <div className={styles.contentContainer}>
        {/* <div>
            <label htmlFor="">학교</label>
            <input type="text" placeholder='학교를 입력해 주세요.'/>
        </div> */}
        <div className={styles.classification}>
            <label htmlFor="">챌린지 분류</label>
            <select name="첼린지 분류" id="">
                <option value="">전체 챌린지</option>
                <option value="">교내 챌린지</option>
            </select>
        </div>
        <div className={styles.period}>
            <label htmlFor="">챌린지 기간</label>
            <input type="date" id='date'/>   ~   <input type="date" id='date'/>
        </div>
        <div className={styles.title}>
            <label htmlFor="">챌린지 제목</label>
            <input type="text" placeholder='챌린지 제목을 작성해 주세요.'/>
        </div>
        <div className={styles.intro}>
            <label htmlFor="">챌린지 소개</label>
            <input type="text" placeholder='챌린지 소개를 작성해 주세요. 이 소개는 각 챌린지 소개에 보이게 될 거예요!'/>
        </div>
        <div className={styles.method}>
            <label htmlFor="">챌린지 방법</label>
            <input type="text" placeholder='챌린지 방법에 대해 설명해 주세요!'/>
        </div>
        <div className={styles.certification}>
            <label htmlFor="">인증 방법</label>
            <select name="인증 방법" id="">
                <option value="">사진</option>
                <option value="">텍스트</option>
            </select>
        </div>
        <button type='submit'>
            <span>추가하기</span>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z" fill="white"/>
            </svg>
        </button>
    </div>
    </>
    )
}

export default ChallengeRegister;