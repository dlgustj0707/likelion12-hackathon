import React from 'react'
import NavBar from '../../component/navBar/navBar';
import styles from './announcement.module.css'

function Announcement() {
    return (
        <>
        <NavBar></NavBar>
            <div className={styles.container}>
                <p>공지사항</p>
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
                        <tr>
                            <td className={styles.tdNum}></td>
                            <td className={styles.tdSubject}><a href="">필독! 챌린지 생성 시 주의사항</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>10</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>9</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>8</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>7</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>6</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>5</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>4</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>3</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>2</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                        <tr>
                            <td className={styles.tdNum}>1</td>
                            <td className={styles.tdSubject}><a href="">8월의 광고 챌린지 목록</a></td>
                            <td className={styles.tdAcess}>131</td>
                            <td className={styles.tdDate}>2024.07.29</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Announcement;
