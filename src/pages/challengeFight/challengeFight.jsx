import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../component/navBar/navBar';
import styles from './challengeFight.module.css';

function ChallengeFight() {
    const [monthlyChallenge, setMonthlyChallenge] = useState(null);
    const [history, setHistory] = useState([]);
    const [rank, setRank] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://beancp.com:8082/chal/monthly')
            .then(response => {
                if (response.status === 200) {
                    setMonthlyChallenge(response.data.monthlyChallenge);
                } else if (response.status === 204) {
                    setError(response.data.message);
                }
            })
            .catch(error => {
                setError('이달의 챌린지 정보를 불러오는데 실패했습니다.');
            });

        axios.get('http://beancp.com:8082/chal/monthly/history')
            .then(response => {
                setHistory(response.data.history);
                console.log(response.data.history);
            })
            .catch(error => {
                setError('대항전 역사 정보를 불러오는데 실패했습니다.');
            });

        axios.get('http://beancp.com:8082/chal/monthly/totalRank')
            .then(response => {
                if (response.status === 200) {
                    setRank(response.data.rank.slice(0, 5)); // 상위 5위까지만 설정
                }
            })
            .catch(error => {
                setError('대항전 총 순위 정보를 불러오는데 실패했습니다.');
            });
    }, []);

    return (
        <>
            <NavBar />
            <div className={styles.challengeDetailContainer}>
                {/* overView */}
                <div className={styles.wrapFlex}>
                    <div className={styles.innerFlexLeft}>
                        <div className={styles.flexItem}>
                            <h2>이달의 대항전</h2>
                            <div className={styles.divider}/>
                            {monthlyChallenge ? (
                                <>
                                    <h3>{monthlyChallenge.title}</h3>
                                    <p>현재 {monthlyChallenge.participants}명 참여 중</p>
                                    <div className={styles.goNowButton}>
                                        참여하기 &gt;
                                    </div>
                                </>
                            ) : (
                                <p>{error ? error : '이달의 챌린지 정보가 없습니다.'}</p>
                            )}
                        </div>
                        <div className={styles.flexItem}>
                            <h2>대항전 역사</h2>
                            <div className={styles.divider}/>
                            {history.length > 0 ? (
                                history.map((item, index) => (
                                    <p key={index}>{item.title}</p>
                                ))
                            ) : (
                                <p>대항전 역사 정보가 없습니다.</p>
                            )}
                        </div>
                    </div>
                    <div className={styles.innerFlexRight}>
                        {rank.length > 0 ? (
                            rank.map((item, index) => (
                                <div className={styles.challengeLogItem} key={index}>
                                    <div className={styles.challengeLogImg} style={{
                                        backgroundColor: 'black',
                                    }}/>
                                    <div className={styles.challengeLogDetail}>
                                        <h4>{index + 1}. {item.schoolName}</h4>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>대항전 총 순위 정보가 없습니다.</p>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChallengeFight;
