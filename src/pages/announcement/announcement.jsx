import React, { useState, useEffect } from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './announcement.module.css';

function Announcement() {
    const [notices, setNotices] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const noticesPerPage = 10;

    useEffect(() => {
        // 공지사항을 불러오는 함수
        const fetchNotices = async () => {
            try {
                const response = await fetch('/notices/list');
                const data = await response.json();
                if (data.notices) {
                    const sortedNotices = data.notices.sort((a, b) => {
                        if (a.important === b.important) {
                            return b.id - a.id;
                        }
                        return a.important ? -1 : 1;
                    });
                    setNotices(sortedNotices);
                }
            } catch (error) {
                console.error('Failed to fetch notices:', error);
            }
        };

        fetchNotices();
    }, []);

    // 현재 페이지에 해당하는 공지사항을 가져오는 함수
    const getCurrentNotices = () => {
        const indexOfLastNotice = currentPage * noticesPerPage;
        const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
        return notices.slice(indexOfFirstNotice, indexOfLastNotice);
    };

    // 페이지네이션 버튼을 생성하는 함수
    const renderPageNumbers = () => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(notices.length / noticesPerPage); i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`${styles.pageButton} ${currentPage === i ? styles.active : ''}`}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </button>
            );
        }
        return pageNumbers;
    };

    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <p>공지사항</p>

                {/* 관리자만 보임 */}
                <div className={styles.editContainer}>
                    <a className={styles.edit} href="/AnnouncementRegister">편집</a>
                </div>
                
                <table>
                    <caption>번호,제목,조회수,날짜</caption>
                    <colgroup>
                        <col className={styles.colNum}/>
                        <col className={styles.colSubject}/>
                        <col className={styles.colAcess}/>
                        <col className={styles.colDate}/>
                    </colgroup>
                    <thead>
                        <tr>
                            <th className={styles.thNum}>번호</th>
                            <th className={styles.thSubject}>제목</th>
                            <th className={styles.thAcess}>조회수</th>
                            <th className={styles.thDate}>날짜</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getCurrentNotices().map((notice, index) => (
                            <tr key={notice.id}>
                                <td className={styles.tdNum}>{notices.length - (currentPage - 1) * noticesPerPage - index}</td>
                                <td className={styles.tdSubject}><a href="">{notice.title}</a></td>
                                <td className={styles.tdAcess}>조회수</td>
                                <td className={styles.tdDate}>날짜</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className={styles.pageNumbers}>
                    {renderPageNumbers()}
                </div>
            </div>
        </>
    );
}

export default Announcement;
