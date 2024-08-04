import React from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './challengeDetail.module.css';

function ChallengeDetail() {
    return (
        <>
            <NavBar />
            <div className={styles.challengeDetailContainer}>
                {/* overView */}
                <div className={styles.wrapFlex}>
                    <div className={styles.innerFlexLeft}>
                        <div className={styles.flexItem}>
                            <h4>일 평균 53명 참여 중</h4>
                            <h2>샐러디 5일 출석 챌린지</h2>
                            <div className={styles.divider}/>
                            <h3>챌린지 참여 방법</h3>
                            <p>1. 어쩌구</p>
                            <p>2. 어쩌구</p>
                            <p>3. 어쩌구</p>
                            <p>4. 어쩌구</p>
                            <p>5. 어쩌구</p>
                        </div>
                        <div className={styles.flexItem}>
                            <h4>2024.0.0 ~ 2024.0.0</h4>
                            <h2>나도 참여하고 싶다면?</h2>
                            <div className={styles.divider}/>
                            <h3>사진 첨부하기</h3>
                            <div className={styles.input}></div>
                            <h3>코멘트 작성하기</h3>
                            <div className={styles.input}></div>
                            <div className={styles.goNowButton}>
                                참여하기 &gt;
                            </div>
                        </div>
                    </div>
                    <div className={styles.innerFlexRight}>
                        <div className={styles.challengeLogItem}>
                            <div className={styles.challengeLogImg} style={{
                                backgroundImage: `url(/sampleImgs/salad.png)`,
                            }}/>
                            <div className={styles.challengeLogDetail}>
                                <h4>행복한 치와와</h4>
                                <p>샐러드는 살 안찜</p>
                            </div>
                        </div>

                        <div className={styles.challengeLogItem}>
                            <div className={styles.challengeLogImg} style={{
                                backgroundImage: `url(/sampleImgs/salad.png)`,
                            }}/>
                            <div className={styles.challengeLogDetail}>
                                <h4>행복한 치와와</h4>
                                <p>샐러드는 살 안찜</p>
                            </div>
                        </div>

                        <div className={styles.challengeLogItem}>
                            <div className={styles.challengeLogImg} style={{
                                backgroundImage: `url(/sampleImgs/salad.png)`,
                            }}/>
                            <div className={styles.challengeLogDetail}>
                                <h4>행복한 치와와</h4>
                                <p>샐러드는 살 안찜</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChallengeDetail;
