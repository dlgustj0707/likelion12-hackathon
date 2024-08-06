import React, { useEffect, useState } from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './challegeViewAll.module.css';
import ChallengeViewComponent from '../../component/challengeViewComponent/challengeViewComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ChallengeViewAll() {
    const navigate = useNavigate();

    const handleClickBtn = () => {
        navigate("/challenge");

    }

    const [challenges, setChallenges] = useState([]);
    const [nowStartNum, setNowStartNum] = useState(0);

    useEffect(() => {
        axios.get('http://beancp.com:8082/main/schoolChal',{ withCredentials: true })
            .then(response => {
                if (response.data && response.data.results) {
                    setChallenges(response.data.results);
                }
            })
            .catch(error => {
                console.error("aa", error);
            });
    }, []);


    const snChange = (cn) =>{
        const nextSn = nowStartNum+cn;
        if( nextSn >= 0 && nextSn < challenges.length){
            setNowStartNum(nextSn);
        }
    }
    const getChalComp = (sn,num) =>{
        let en = sn+num;
        let boogie;
        if(challenges.length< en){
            boogie = (challenges.length < sn) ? num : sn+num-challenges.length;
            en = challenges.length;
        }
        let chalComps = [];
        if( en >= sn){
            chalComps = challenges.slice(sn,en).map((challenge, index) => (
                <ChallengeViewComponent 
                    key={index} 
                    title={challenge.title} 
                    people={challenge.participants}
                    content={(challenge.description.length>32)?challenge.description.substring(0, 32)+'...':challenge.description}
                    id={challenge.id}
                    />
            ));
        }

        for (let i = 0; i < boogie; i++) {
            chalComps.push(
              <ChallengeViewComponent 
                key={chalComps.length + i} 
                title="" 
                people="" 
                content=""
                id=""
              />
            );
        }
        return chalComps;
    }
    
    
    
    return (
        <>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <hr className={styles.topTitle}/>
                    <p className={styles.subtitle}><span style={{color:"rgb(155,50,50)"}}>교내</span> 첼린지<br />전체 보기</p>
                    <div className={styles.buttons}>
                        <div className={styles.beforeBtn} onClick={()=>{snChange(-7)}} >&#10094;</div>
                        <div className={styles.afterBtn} onClick={()=>{snChange(7)}}>&#10095;</div>
                    </div>
                    <button onClick={handleClickBtn}>챌린지 만들기</button>
                </div>

                <div className={styles.challengeList}>
                    <div className={styles.challengeListRow}>
                        {getChalComp(nowStartNum,3)}
                    </div>
                    <div className={styles.challengeListRow}>
                        {getChalComp(nowStartNum+4,4)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChallengeViewAll;
