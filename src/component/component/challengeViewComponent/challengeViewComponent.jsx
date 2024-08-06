import React from 'react'
import styles from './challengeViewComponent.module.css'
import { useNavigate } from 'react-router-dom';

function ChallengeViewComponent(props) {
    const title = props.title;
    const people = props.people;
    const content = props.content;
    const id = props.id;

    const navigate = useNavigate()

    const goToDetail=()=>{
        navigate('/challengeDetail', { state: { id: id } });
    }

    return (
        <>
            <div className={styles.container} onclick={()=>{goToDetail()}}>
                <div>
                    <p className={styles.titleContainer}>{title}</p>
                    {title?<div className={styles.peopleContainer}>{people}명 참여 중</div>:<></>}
                </div>
                
                <p className={styles.contentContainer}>{content}</p>
            </div>
        </>
    )
}

export default ChallengeViewComponent;