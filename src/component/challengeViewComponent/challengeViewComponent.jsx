import React from 'react'
import styles from './challengeViewComponent.module.css'

function ChallengeViewComponent(props) {
    const title = props.title;
    const people = props.people;
    const content = props.content;

    return (
        <>
        <div className={styles.container}>
            <div>
                <p className={styles.titleContainer}>{title}</p>
                <div className={styles.peopleContainer}>{people}명 참여 중</div>
            </div>
            
            <p className={styles.contentContainer}>{content}</p>
        </div>
        </>
    )
}

export default ChallengeViewComponent;