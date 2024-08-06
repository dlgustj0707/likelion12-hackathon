import React, { Text, useEffect, useState } from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './main.module.css';
import ImgItem from './imgItem';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function Main() {

    const [challenges, setChallenges] = useState([]);
    const [chalname,setChalname] = useState(['','','','','',''])
    const [challenges2, setChallenges2] = useState([]);
    const [chalname2,setChalname2] = useState(['','','','','',''])
    

    useEffect(() => {
        
        axios.get('http://beancp.com:8082/main/schoolChal',{ withCredentials: true })
            .then(response => {
                if (response.data && response.data.results) {
                    setChallenges(response.data.results);
                }

                setChalname((name) =>{
                    let en = (response.data.results.length >6) ? 6 : response.data.results.length;
                    for (let i = 0 ; i < en; i++){
                        name[i] = response.data.results[i].title
                    }
                    return name;
                });

            })
            .catch(error => {
                console.error("aa", error);
            });
        axios.get('http://beancp.com:8082/main/allChal',{ withCredentials: true })
            .then(response => {
                if (response.data && response.data.results) {
                    setChallenges2(response.data.results);
                }

                setChalname2((name) =>{
                    let en = (response.data.results.length >6) ? 6 : response.data.results.length;
                    for (let i = 0 ; i < en; i++){
                        name[i] = response.data.results[i].title
                    }
                    return name;
                });
            })
            .catch(error => {
                console.error("aa", error);
        });
    }, []);
    
    return (
        <>
            <div className={styles.welcomeMessageContainer}>
                <h3 className={styles.welcomeMessageTitle}>환영합니다!</h3>
                <p className={styles.welcomeMessageDetail}>여기는 당신의 창의력과 도전 정신을 발휘할 수 있는 최고의 공간입니다. 스쿨 챌린지는 학생들이 학교와 전체 커뮤니티에서 다양한 챌린지를 생성하고 참여할 수 있도록 지원하는 플랫폼입니다. 여러분이 직접 챌린지를 만들고, 친구들과 함께 도전하며, 멋진 경험을 쌓아보세요!

이곳에서는 다양한 챌린지를 통해 새로운 기술과 지식을 습득하고, 자신의 한계를 시험해 볼 수 있습니다. 교내 챌린지를 통해 학교 친구들과 협력하고 소통하며, 더욱 단합된 학교 문화를 만들어갈 수 있습니다. 챌린지를 성공적으로 완료하고 목표를 달성하면서 성취감을 느낄 수 있으며, 건전한 경쟁을 통해 자신을 발전시킬 수 있습니다.

여러분의 참여와 도전을 기대합니다. 함께 더 나은 내일을 만들어가요!</p>
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
                    {/*<ImgItem title="샐러디 5일 출석" src="/sampleImgs/salad.png"/>*/}
                    <div className={styles.challengeColumnFlex}>
                        <div className={styles.challengeRowFlex}>
                            <div className={styles.challengeItem}>{chalname[0]}</div>
                            <div className={styles.challengeItem}>{chalname[1]}</div>
                            <div className={styles.challengeItem}>{chalname[2]}</div>
                        </div>
                        <div className={styles.challengeRowFlex}>
                            <div className={styles.challengeItem}>{chalname[3]}</div>
                            <div className={styles.challengeItem}>{chalname[4]}</div>
                            <div className={styles.challengeItem}>{chalname[5]}</div>
                        </div>
                    </div>
                </div>

                {/* entireChallenge */}
                <h1>전체 챌린지</h1>
                <div className={styles.inSchoolChallengeFlex}>
                    {/*<ImgItem title="샐러디 5일 출석" src="/sampleImgs/salad.png"/>*/}
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
                {/* myChallenge */}
                {/*
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
                */}
            </div>
        </>
    );
}

export default Main;
