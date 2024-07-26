import React, { Text } from 'react';
import NavBar from '../../component/navBar';

import styles from './main.module.css';
import ImgItem from './imgItem';

function Main() {

    return (
        <>
            <NavBar/>
            <div className={styles.welcomeMessageContainer}>
                <h3 className={styles.welcomeMessageTitle}>Welcome Message</h3>
                <p className={styles.welcomeMessageDetail}>Molestiae natus quidem recusandae. Ut dolorem et omnis. Quasi placeat quae nostrum omnis illum. Eveniet quas esse voluptas accusantium provident. Beatae fugit sed quisquam minus sunt vitae id et. Quisquam qui totam eius et nemo libero omnis et at. 
                    Sit non quia nemo omnis quaerat hic in ipsam eveniet. Molestiae tenetur magnam quod magni enim qui adipisci. Omnis nihil dolor animi numquam quae accusamus. Vel ad officiis quia id magni mollitia sed. Quibusdam ex mollitia reprehenderit velit.
                    Qui ipsum ea est perferendis aut. Quis in nam accusantium nihil in impedit. Facere voluptas ab quam amet.</p>
            </div>
            
            <div className={styles.challengeInfoContainer}>
                {/* overView */}
                <div className={styles.challengeOverViewFlex}>
                    <div className={styles.overViewItem}>
                        <h3>이달의 대항전</h3>
                        <div className={styles.divider}/>
                        <p>하루 한 번 긍정적인 한 문장 말하기</p>
                        <div className={styles.goNowButton}>
                            지금 바로 참여하기 &gt;
                        </div>
                    </div>
                    <div className={styles.overViewItem}>
                        <h3>현재 순위</h3>
                        <div className={styles.divider}/>
                        <div className={styles.schoolRankingFlex}>
                            <div className={styles.schoolItem}><div className={styles.schoolLogo}/>1.{'인천대'}</div>
                            <div className={styles.schoolItem}><div className={styles.schoolLogo}/>2.{'연세대'}</div>
                            <div className={styles.schoolItem}><div className={styles.schoolLogo}/>3.{'인하대'}</div>
                        </div>
                    </div>
                    <div className={styles.overViewItem}>
                        <h3>인기 급상승 챌린지</h3>
                        <div className={styles.divider}/>
                        <div className={styles.ingiChangedChallengeFlex}>
                            <div className={styles.ChallengeItem}><span>매일 6000걸음 걷기</span><span>↑</span></div>
                            <div className={styles.ChallengeItem}><span>미라클 모닝 도전</span><span>ㅡ</span></div>
                            <div className={styles.ChallengeItem}><span>매일 물 2L 도전</span><span>↓</span></div>
                        </div>
                    </div>
                </div>

                {/* inSchoolChallenge */}
                <h1>교내 챌린지</h1>
                <div className={styles.inSchoolChallengeFlex}>
                    <ImgItem title="샐러디 5일 출석" src="/sampleImgs/salad.png"/>
                    <div className={styles.challengeColumnFlex}>
                        <div className={styles.challengeRowFlex}>
                            <div className={styles.challengeItem}>이룸관 주 3회</div>
                            <div className={styles.challengeItem}>솔찬공원 산책 30분</div>
                            <div className={styles.challengeItem}>솔찬공원 산책 30분</div>
                        </div>
                        <div className={styles.challengeRowFlex}>
                            <div className={styles.challengeItem}>솔찬공원 산책 30분</div>
                            <div className={styles.challengeItem}>솔찬공원 산책 30분</div>
                            <div className={styles.challengeItem}>솔찬공원 산책 30분</div>
                        </div>
                    </div>
                </div>

                {/* entireChallenge */}
                <h1>전체 챌린지</h1>

                {/* myChallenge */}
                <h1>참여중인 챌린지</h1>
                <div className={styles.myChallengeFlex}>
                    <div className={styles.inSchool}>
                        <h3>교내 챌린지</h3>
                        <div className={styles.challengeColumnFlex}>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                        </div>
                    </div>
                    <div className={styles.entireSchool}>
                        <h3>전체 챌린지</h3>
                        <div className={styles.challengeColumnFlex}>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                            <p>샐러디 5회 출석</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
