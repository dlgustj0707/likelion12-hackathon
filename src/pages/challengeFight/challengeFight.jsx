import React from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './challengeFight.module.css';

function ChallengeFight() {
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
                            <h3>하루에 한 문장 긍정적인 말하기</h3>
                            <p>현재 250명 참여 중</p>
                            <div className={styles.goNowButton}>
                                참여하기 &gt;
                            </div>
                        </div>
                        <div className={styles.flexItem}>
                            <h2>대항전 역사</h2>
                            <div className={styles.divider}/>
                            <p>하루에 한 번 다른 사람 칭찬하기</p>
                            <p>스터디 카페에서 3시간 공부하기</p>
                            <p>하루에 한 끼 샐러드 먹기</p>
                            <p>하루에 한 장 영어 필사 하기</p>
                            <p>물 2L 마시기</p>
                            <p>8시간 숙면하기</p>
                        </div>
                    </div>
                    <div className={styles.innerFlexRight}>
                        <div className={styles.challengeLogItem}>
                            <div className={styles.challengeLogImg} style={{
                                backgroundColor: 'black',
                            }}/>
                            <div className={styles.challengeLogDetail}>
                                <h4>1. 인천대 </h4>
                            </div>
                        </div>

                        <div className={styles.challengeLogItem}>
                            <div className={styles.challengeLogImg} style={{
                                backgroundColor: 'black',
                            }}/>
                            <div className={styles.challengeLogDetail}>
                                <h4>2. 인하대 </h4>
                            </div>
                        </div>

                        <div className={styles.challengeLogItem}>
                            <div className={styles.challengeLogImg} style={{
                                backgroundColor: 'black',
                            }}/>
                            <div className={styles.challengeLogDetail}>
                                <h4>3. 연세대 </h4>
                            </div>
                        </div>

                        <div className={styles.challengeLogItem}>
                            <div className={styles.challengeLogImg} style={{
                                backgroundColor: 'black',
                            }}/>
                            <div className={styles.challengeLogDetail}>
                                <h4>4. 서울대  </h4>
                            </div>
                        </div>

                        <div className={styles.challengeLogItem}>
                            <div className={styles.challengeLogImg} style={{
                                backgroundColor: 'black',
                            }}/>
                            <div className={styles.challengeLogDetail}>
                                <h4>5. 고려대 </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChallengeFight;
