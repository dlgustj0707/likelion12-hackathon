import React from 'react'
import styles from './challengeViewComponent.module.css'

function ChallengeViewComponent2(props) {
    const title = props.title;
    const count = props.count;
    const content = props.content;

    return (
        <>
        <div className={styles.container}>
            <div>
                <p className={styles.titleContainer}>{title}</p>
                <div className={styles.peopleContainer}>현재 {count}회 참여</div>
            </div>
            
            <p className={styles.contentContainer}>{content}</p>
        </div>
        </>
    )
}

export default ChallengeViewComponent2;