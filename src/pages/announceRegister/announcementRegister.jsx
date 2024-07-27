import React from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './announcementRegister.module.css';

function AnnouncementRegister() {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <p className={styles.subtitle}>공지사항 등록하기</p>

                <div className={styles.contentContainer}>
                    <div className={styles.title}>
                        <label htmlFor="">제목</label>
                        <input type="text" placeholder='제목을 작성해 주세요.' />
                    </div>
                    <div className={styles.content}>
                        <label htmlFor="">내용</label>
                        <textarea placeholder='공지사항을 작성해 주세요.'></textarea>
                    </div>
                    <div className={styles.read}>
                        <label htmlFor="">필독 유무</label>
                        <select name="필독 유무" id="">
                            <option value="">필독</option>
                            <option value="">일반</option>
                        </select>
                    </div>
                    <button type='submit'>
                        <span>등록하기</span>
                        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z" fill="white" />
                        </svg>
                    </button>
                </div>

            </div>
        </>
    )
}

export default AnnouncementRegister;
