import React, { useState } from 'react'
import NavBar from '../../component/navBar/navBar';
import styles from './challengeRegister.module.css';

function ChallengeRegister() {
    // open은 전체 챌린지면 true, 교내면 false
    // authentication은 사진이면 0 텍스트면 1
    const [isOpen,setIsOpen] = useState(false);  
    const [periodStart, setPeriodStart] = useState("");  
    const [periodEnd, setPeriodEnd] = useState("");
    const [title, setTitle] = useState("");
    const [authentication,setAuthentication] = useState(0);
    const [description,setDescription] = useState("");
    const [introduce,setIntroduce] = useState("");


    const handleChangeOpen = (e) => {
        setIsOpen(e.target.value === "전체 챌린지");
    }
    const handleChangePeriodStart = (e) => {
        setPeriodStart(e.target.value);
    }
    const handleChangePeriodEnd = (e) => {
        setPeriodEnd(e.target.value);
    }

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleChangeAuthentication = (e) => {
        if (e.target.value === '사진'){
            setAuthentication(0);
        }else if (e.target.value === '텍스트'){
            setAuthentication(1);
        }
        
    }

    const handleChangeIntroduce = (e) => {
        setIntroduce(e.target.value);
    }

    const handleChangeDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleClickBtn = async(e) => {
        e.preventDefault();
        try{
            const response = await fetch('/chal', {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    open: isOpen, 
                    title: title,
                    introduce: introduce,
                    description: description,
                    authentication: authentication,
                    ch_start: periodStart,
                    ch_end: periodEnd,
                })
            })
            const data = await response.json();
            if (response.status === 200){
                alert(data.message);
                // 어디로 이동하지..?
                window.location.href = '/';
            } else {
                alert(data.message);
            }
        }catch(error){
            alert(error);
            console.error(error);
        }
    }
    
    return (
    <>
    <NavBar></NavBar>
    <div className={styles.subtitle}>
        <p>챌린지 추가하기</p>
    </div>

    <div className={styles.contentContainer}>
        {/* <div>
            <label htmlFor="">학교</label>
            <input type="text" placeholder='학교를 입력해 주세요.'/>
        </div> */}
        <div className={styles.classification}>
            <label htmlFor="">챌린지 분류</label>
            <select name="첼린지 분류" id="open" value={isOpen} onChange={handleChangeOpen}>
                <option value="">선택</option>
                <option value="전체 챌린지">전체 챌린지</option>
                <option value="교내 챌린지">교내 챌린지</option>
            </select>
        </div>
        <div className={styles.period}>
            <label htmlFor="">챌린지 기간</label>
            <input type="date" id='periodStart' value={periodStart} onChange={handleChangePeriodStart}/>   ~   <input type="date" id='periodEnd' value={periodEnd} onChange={handleChangePeriodEnd}/>
        </div>
        <div className={styles.title}>
            <label htmlFor="">챌린지 제목</label>
            <input type="text" id="title" value={title} onChange={handleChangeTitle} placeholder='챌린지 제목을 작성해 주세요.'/>
        </div>
        <div className={styles.intro}>
            <label htmlFor="">챌린지 소개</label>
            <input type="text" id="introduce" value={introduce} onChange={handleChangeIntroduce} placeholder='챌린지 소개를 작성해 주세요. 이 소개는 각 챌린지 소개에 보이게 될 거예요!'/>
        </div>
        <div className={styles.method}>
            <label htmlFor="">챌린지 방법</label>
            <textarea  id="description" value={description} onChange={handleChangeDescription} placeholder='챌린지 방법에 대해 설명해 주세요!'/>
        </div>
        <div className={styles.certification}>
            <label htmlFor="">인증 방법</label>
            <select name="인증 방법" id="authentication" value={authentication} onChange={handleChangeAuthentication}>
                <option value="">선택</option>
                <option value="사진">사진</option>
                <option value="텍스트">텍스트</option>
            </select>
        </div>
        <button onClick={handleClickBtn}>
            <span>추가하기</span>
            <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18.23L1.77 20L11.77 10L1.77 0L0 1.77L8.23 10L0 18.23Z" fill="white"/>
            </svg>
        </button>
    </div>
    </>
    )
}

export default ChallengeRegister;