import React from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './challegeViewAll.module.css';
import ChallengeViewComponent from '../../component/challengeViewComponent/challengeViewComponent';

function ChallengeViewAll() {
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <hr />
                <div className={styles.subtitle}>
                    <p>교내 첼린지<br />전체 보기</p>
                </div>
                <div className={styles.challengeList}>
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
        </>
    );
}

export default ChallengeViewAll;
