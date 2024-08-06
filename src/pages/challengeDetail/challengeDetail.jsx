import React, { useEffect, useRef, useState } from 'react';
import NavBar from '../../component/navBar/navBar';
import styles from './challengeDetail.module.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function ChallengeDetail() {

    const location = useLocation();
    const { id } = location.state || {};
    const [chalDetail, setChalDetail] = useState({userComments:[]});
    const [commentFile, setCommentFile] = useState();
    const [comment, setComment] = useState('');
    const fileInputRef = useRef(null);

    

    useEffect(() => {
        axios.get(`http://beancp.com:8082/chal/${id}`,{ withCredentials: true })
            .then(response => {
                setChalDetail(response.data);
                //const chalItems = response.data.userComments;
                //console.log(chalItems[0]);
            })
            .catch(error => {
                console.error("aa", error);
            });
    }, []);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCommentFile(file);
        }
      };

      const handleButtonClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };

    const getDetail = () =>{
        const chalItem = chalDetail.userComments;
        /*let chalComps = chalDetail.userComments.map((chal, i) => (
            <div key={i} className={styles.challengeLogItem}>
                <div className={styles.challengeLogImg} style={{
                    backgroundImage: `${c.image_url}`,
                }}/>
                <div className={styles.challengeLogDetail}>
                    <h4>{chal.name}</h4>
                    <p>{chal.content}</p>
                </div>
            </div>
        ));*/
        
        const chalComps = chalItem.map((chal, i) => (
            <div key={i} className={styles.challengeLogItem}>
              <div
                className={styles.challengeLogImg}
                style={{
                  backgroundImage: `url(${chal.image_url })`
                }}
              />
              <div className={styles.challengeLogDetail}>
                <h4>{chal.name}</h4>
                <p>{chal.content}</p>
              </div>
            </div>
          ))

        return chalComps;
    }
    const pressReview = async (e) =>{
        e.preventDefault();


        try {

            if(commentFile){

                let formData = new FormData();
                formData.append('image_file', commentFile);
                formData.append('content',comment)
                //console.log(formData);
                
                /*
                const res = await axios.post(`http://beancp.com:8082/chal/${id}`, {
                    withCredentials: true
                });
                if (res.status === 200) {
                    alert(res.data.message);
                } else {
                    alert(res.data.message);
                }*/
                /*
                const res = await axios.get(`http://beancp.com:8082/chal/${id}`,{ withCredentials: true });
                if (res.status === 200) {
                    console.log(res);
                } else {
                    console.log(res);
                }*/
                const response = await axios.post(`http://beancp.com:8082/chal/${id}/auth/0`, formData, {
                    withCredentials: true
                });
                if (response.status === 200) {
                    //alert(response.data.message);
                    window.location.reload();
                } else {
                }
                
            }

           
        } catch (error) {
            alert("오늘 이미 참여한 챌린지입니다 (1일 1회)");
        }
    }
    const handleChange = (event) => {
        setComment(event.target.value); // 입력된 값으로 상태 업데이트
      };

    
    return (
        <>
            <NavBar />
            <div className={styles.challengeDetailContainer}>
                {/* overView */}
                <div className={styles.wrapFlex}>
                    <div className={styles.innerFlexLeft}>
                        <div className={styles.flexItem}>
                            <h4>총 {chalDetail.participants}명 참여 중</h4>
                            <h2>{chalDetail.title}</h2>
                            <div className={styles.divider}/>
                            <h3>챌린지 설명</h3>
                            <div className="desc">
                                <p>{chalDetail.description}</p>
                            </div>
                        </div>
                        <div className={styles.flexItem}>
                            <h4>{chalDetail.chStart} ~ {chalDetail.chEnd}</h4>
                            <h2>나도 참여하고 싶다면?</h2>
                            <div className={styles.divider}/>
                            <h3>사진 첨부하기</h3>
                            <input
                                type="file"
                                id="fileInput"
                                ref={fileInputRef}
                                onChange={handleFileChange}
                            />
                            <h3>코멘트 작성하기</h3>
                            <input className={styles.input} type="text" id="comment" placeholder='코멘트를 적어주세요'
                                value={comment} // 입력된 값과 상태를 동기화
                                onChange={handleChange} // 입력 변경 시 상태 업데이트 
                            />
                            <div className={styles.goNowButton} onClick={pressReview}>
                                참여하기 &gt;
                            </div>
                        </div>
                    </div>
                    <div className={styles.innerFlexRight}>
                        {/*
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
                        */}
                        {getDetail()}
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default ChallengeDetail;
