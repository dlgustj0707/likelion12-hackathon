import React from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './allChallegeViewAll.module.css';
import ChallengeViewComponent from '../../component/challengeViewComponent/challengeViewComponent';
import { useNavigate } from 'react-router-dom';

function ChallengeViewAll() {
    const navigate = useNavigate();

    const handleClickBtn = () => {
        navigate("/challenge");

    }
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <hr className={styles.topTitle}/>
                    <p className={styles.subtitle}>전체 첼린지<br />전체 보기</p>
                    <button onClick={handleClickBtn}>챌린지 만들기</button>
                </div>

                <div className={styles.challengeList}>
                    <div className={styles.challengeListRow}>
                        <ChallengeViewComponent
                            title="샐러디 주 5일 참석"
                            people="53"
                            content="여름을 다가오며 다이어트를 결심한 당신! 어쩌구저쩌구~"
                        />
                        <ChallengeViewComponent
                            title="샐러디 주 5일 참석"
                            people="53"
                            content="여름을 다가오며 다이어트를 결심한 당신! 어쩌구저쩌구~"
                        />
                        <ChallengeViewComponent
                            title="샐러디 주 5일 참석"
                            people="53"
                            content="여름을 다가오며 다이어트를 결심한 당신! 어쩌구저쩌구~"
                        />
                    </div>
                    <div className={styles.challengeListRow}>
                        <ChallengeViewComponent
                            title="샐러디 주 5일 참석"
                            people="53"
                            content="여름을 다가오며 다이어트를 결심한 당신! 어쩌구저쩌구~"
                        />
                        <ChallengeViewComponent
                            title="샐러디 주 5일 참석"
                            people="53"
                            content="여름을 다가오며 다이어트를 결심한 당신! 어쩌구저쩌구~"
                        />
                        <ChallengeViewComponent
                            title="샐러디 주 5일 참석"
                            people="53"
                            content="여름을 다가오며 다이어트를 결심한 당신! 어쩌구저쩌구~"
                        />
                        <ChallengeViewComponent
                            title="샐러디 주 5일 참석"
                            people="53"
                            content="여름을 다가오며 다이어트를 결심한 당신! 어쩌구저쩌구~"
                        />
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChallengeViewAll;
